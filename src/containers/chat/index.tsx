import axiosOpenAiClient from '@/apis/axios-openai-client';
import * as React from 'react';

export default function Chat() {

    const [input, setInput] = React.useState('');
    const [chat, setChat] = React.useState<{ role: 'user' | 'bot', content: string, timestamp: string }[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const chatWindowRef = React.useRef<HTMLDivElement>(null);
    const [showScrollTop, setShowScrollTop] = React.useState(false);

    const checkScroll = () => {
        const element = chatWindowRef.current;
        if (element) {
            if (element.scrollHeight > element.clientHeight) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        }
    };

    React.useEffect(() => {
        const element = chatWindowRef.current;
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }, [chat]);


    const scrollToTop = () => {
        const element: any = chatWindowRef.current;
        element.scrollTop = 0;
    };


    const askQuestion = async () => {
        if (input.trim() === '') {
            alert('Input cannot be empty');
            return;
        }
        setIsLoading(true);
        const timestamp = new Date().toLocaleString();
        setChat([...chat, { role: 'user', content: input, timestamp }]);

        const response: any = await axiosOpenAiClient.post('/ask', { prompt: input });
        const data = await response?.reply;
        setChat([...chat, { role: 'user', content: input, timestamp }, { role: 'bot', content: data, timestamp }]);

        // Reset ô input
        setInput('');

        setIsLoading(false);
    };
    return (
        <div className="App">
            <div className="chat-container">

                <div className="chat-window" ref={chatWindowRef}>
                    {chat.length === 0 ? (
                        <div className="initial-message">Ask something...</div>
                    ) : (
                        <div>
                            {chat.map((message, index) => (
                                <div key={index} className={`chat-message ${message.role}`}>
                                    <div className="chat-name">{message.role === 'user' ? 'You' : 'Bot'}</div>
                                    <div className="chat-timestamp">{message.timestamp}</div>
                                    {message.content}
                                </div>
                            ))}
                        </div>
                    )}

                    {isLoading && (
                        <div className="loading-container">
                            Loading
                            <span className="loading-dot"></span>
                            <span className="loading-dot"></span>
                            <span className="loading-dot"></span>
                        </div>
                    )}

                </div>
                {showScrollTop && (
                    <button className="scroll-to-top" onClick={scrollToTop}>
                        Scroll to Top
                    </button>
                )}
                <div className="input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={askQuestion}>Send</button>
                </div>
            </div>
        </div>
    );
}
