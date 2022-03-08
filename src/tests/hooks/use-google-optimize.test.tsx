import * as React from 'react'
import { render } from '@testing-library/react'
import {useGoogleOptimize} from "../../hooks/use-google-optimize"

interface Props {
    optimizeContainerID: string
}

const TestRootComponent: React.FC<Props> = ({ optimizeContainerID }) => {
    useGoogleOptimize(optimizeContainerID)
    return null
}

describe('useInjectGoogleOptimize', () => {

    it('can add script by providing optimize container id', () => {
        const optimizeContainerID = 'EXAMPLE_ID'

        render(<TestRootComponent optimizeContainerID={optimizeContainerID}/>)

        const scripts = document.getElementsByTagName("script")

        expect(scripts.length).toBe(1)
        expect(scripts[0].src).toBe( `https://www.googleoptimize.com/optimize.js?id=${optimizeContainerID}`)
        expect(document.head.childNodes.length).toBe(1)
    })
})