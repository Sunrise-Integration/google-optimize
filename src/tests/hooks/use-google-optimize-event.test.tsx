import * as React from 'react'
import { render } from '@testing-library/react'
import {useGoogleOptimizeEvent} from "../../hooks/use-google-optimize-event";
import {useGoogleOptimize} from "../../hooks/use-google-optimize";

interface Props {
    optimizeContainerID: string
}

const TestRootComponent: React.FC<Props> = ({ optimizeContainerID }) => {
    useGoogleOptimize(optimizeContainerID)
    useGoogleOptimizeEvent()
    return null
}
const TestExceptionRootComponent: React.FC = () => {
    try {
        useGoogleOptimizeEvent()
    } catch (error) {
        console.error(error);
    }
    return null
}

describe('useOptimizeEvent Tests', () => {

    it('Can add `optimize.activate` event', () => {
        const optimizeContainerID = 'EXAMPLE_ID'

        render(<TestRootComponent optimizeContainerID={optimizeContainerID}/>)

        // @ts-ignore
        expect(window.dataLayer).toEqual(
            expect.arrayContaining([{'event': 'optimize.activate'}])
        )
    })
    
    it('Cannot call `useGoogleOptimizeEvent` without call `useGoogleOptimize` first', () => {
        try {
            render(<TestExceptionRootComponent />)
        } catch (error) {
           expect(error).toEqual(new Error("You must call useGoogleOptimize hook before this hook.")); 
        }
    })
})
