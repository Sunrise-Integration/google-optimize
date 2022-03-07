import { useEffect } from 'react'
import  {googleOptimize} from "../core/google-optimize-manager"

export const useGoogleOptimize = (optimizeContainerID: string) => {

    useEffect(() => {

        googleOptimize.addScriptWithCustomContainer(optimizeContainerID)

        return () => {
            googleOptimize.removeHeadScript()
        }

    }, [optimizeContainerID])
}

