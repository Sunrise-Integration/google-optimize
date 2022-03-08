import * as React from 'react'
import {Story} from "@storybook/react"
import {useGoogleOptimize} from "../hooks/use-google-optimize";
import {useGoogleOptimizeEvent} from "../hooks/use-google-optimize-event";

interface Props {
    ContainerId: string
}

export const GoogleOptimizeComponent: Story<Props> = ({ContainerId}) => {
    useGoogleOptimize(ContainerId)
    useGoogleOptimizeEvent()
    
    return React.createElement('div', {className: 'google-optimize'}, `The container ID is ${ContainerId}`)
}

GoogleOptimizeComponent.storyName = 'Google Optimize'
GoogleOptimizeComponent.args = {
    ContainerId: 'OPT-PSHC8PZ'
}

export default  {
    title: 'Google Optimize'
}