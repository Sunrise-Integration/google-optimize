import { useEffect } from 'react'
import  {googleOptimize} from "../core/google-optimize-manager"

export const useGoogleOptimizeEvent = (eventName: string = 'optimize.activate', options: Object = {}) => {

    useEffect(() => {
        try {
            googleOptimize.activateEvent(eventName, options);
        } catch(error) {
            console.error(error);
        }
    }, [])
}

