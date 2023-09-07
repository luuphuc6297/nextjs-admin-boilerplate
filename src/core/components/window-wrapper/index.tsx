import { useRouter } from 'next/router';
import * as React from 'react';

interface Props {
    children: React.ReactNode
}

const WindowWrapper = ({ children }: Props) => {
    // ** State
    const [windowReadyFlag, setWindowReadyFlag] = React.useState<boolean>(false)

    
    const router = useRouter()

    React.useEffect(
        () => {
            console.log('window__', typeof window)
            if (typeof window !== 'undefined') {
                console.log('windowReadyFlag', windowReadyFlag)
                setWindowReadyFlag(true)
            }
        },

        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.route]
    )

    
    if (windowReadyFlag) {
        return <>{children}</>
    } else {
        return null
    }
}

export default WindowWrapper
