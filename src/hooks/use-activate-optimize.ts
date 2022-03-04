import { useEffect } from 'react'
import  {googleOptimize} from "../core/google-optimize-manager"

export const useActivateOptimize = (eventName: string = 'optimize.activate', options: Object) => {

    useEffect(() => {
        googleOptimize.activateEvent(eventName, options);
    }, [])
}

