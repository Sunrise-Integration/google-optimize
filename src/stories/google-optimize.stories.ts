import * as React from 'react'
import {Story} from "@storybook/react"
import {useGoogleOptimize} from "../hooks/use-google-optimize";
import {useGoogleOptimizeEvent} from "../hooks/use-google-optimize-event";
import {useEffect, useRef} from "react";

interface Props {
    ContainerId: string
}

export const GoogleOptimizeComponent: Story<Props> = ({ContainerId}) => {
    useGoogleOptimize(ContainerId)
    useGoogleOptimizeEvent()

    let [message, setMessage] =  React.useState(`Container Id: ${ContainerId} in use.`);
    const isInitialMount = useRef(true);


    useEffect(() => {

        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        let scripts =  document.getElementsByTagName('script');

        for (let i = 0; i < scripts.length; i++) {
            if (scripts[i].src.includes('googleoptimize')) {
                setMessage(`Container Id: ${ContainerId} in use. Successfully added script to head. ${scripts[i].outerHTML}`);
                isInitialMount.current = true;
                break;
            }
        }

    });

    return React.createElement('div', {className: 'google-optimize'}, message)
}

GoogleOptimizeComponent.storyName = 'Google Optimize'
GoogleOptimizeComponent.args = {
    ContainerId: 'SAMPLE_ID'
}

export default  {
    title: 'Google Optimize'
}