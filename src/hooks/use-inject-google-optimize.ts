import { useEffect } from 'react'
import  {googleOptimize} from "../core/google-optimize-manager"

export const useInjectGoogleOptimize = (optimizeContainerID: string) => {

    useEffect(() => {

        googleOptimize.addScriptWithCustomContainer(optimizeContainerID)

        return () => {
            googleOptimize.removeHeadScript()
        }

    }, [optimizeContainerID])
}

