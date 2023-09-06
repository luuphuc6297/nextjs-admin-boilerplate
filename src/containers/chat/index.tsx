import axiosOpenAiClient from '@/apis/axios-openai-client';
import * as React from 'react';

export default function Chat() {

    const [input, setInput] = React.useState('');
    const [chat, setChat] = React.useState<{ role: 'user' | 'bot', content: string, timestamp: string }[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const askQuestion = async () => {
        setIsLoading(true);
        const timestamp = new Date().toLocaleString();
        setChat([...chat, { role: 'user', content: input, timestamp }]);
        const response: any = await axiosOpenAiClient.post('/ask', { prompt: input });
        const data = await response?.reply;
        setChat([...chat, { role: 'user', content: input, timestamp }, { role: 'bot', content: data, timestamp }]);
        setInput('');
        setIsLoading(false);
    };

    return (
        <div className="App">
            <div className="chat-container">
                <div className="chat-window">
                    {chat.map((message, index) => (
                        <div key={index} className={`chat-message ${message.role}`}>
                            <div className="chat-name">{message.role === 'user' ? 'You' : 'Bot'}</div>
                            <div className="chat-timestamp">{message.timestamp}</div>
                            {message.content}
                        </div>
                    ))}
                    {isLoading && <div className="loading">Loading...</div>}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={askQuestion}>Ask</button>
                </div>
            </div>
        </div>
    );
}
