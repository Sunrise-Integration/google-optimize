import { useEffect } from 'react'
import  {googleOptimize} from "../core/google-optimize-manager"

/**
 * 
 * @param eventName
 * @param options
 * @throws {Error} Throws an error if useGoogleOptimize was not called
 */

export const useGoogleOptimizeEvent = (eventName  = 'optimize.activate', options: object = {}) => {

    useEffect(() => {
        googleOptimize.activateEvent(eventName, options)
    }, [eventName, options])
}

