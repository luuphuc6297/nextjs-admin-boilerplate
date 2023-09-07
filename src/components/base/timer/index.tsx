import * as React from 'react';

const zeroPad = (num: number, size = 2) => {
    let number = num.toString()
    while (number.length < size) number = '0' + number
    return number
}

interface TimerProps {
    delayResend?: number
    children?: any
    resetTrigger?: string | null
}

export const Timer = ({ delayResend = 120, children, resetTrigger }: TimerProps) => {
    const defaultDelayResend = delayResend
    const [delay, setDelay] = React.useState(defaultDelayResend)

    const minutes = Math.floor(delay / 60)
    const seconds = Math.floor(delay % 60)

    React.useEffect(() => {
        if (resetTrigger) {
            setDelay(defaultDelayResend)
        }
    }, [resetTrigger, defaultDelayResend])

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDelay(delay - 1)
        }, 1000)

        if (delay === 0) {
            clearInterval(timer)
        }

        return () => {
            clearInterval(timer)
        }
    })

    return <>{delay === 0 && children ? children : `${zeroPad(minutes)}:${zeroPad(seconds)}`}</>
}
