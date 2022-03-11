# Google Optimize

 Google Optimize integration for Shogun Frontend.

> Personalize your site. Reap the rewards.

<table>
  <tbody>
    <tr>
      <td>⚠️</td>
      <td>This package runs on Shogun Frontend. </td>
    </tr>
  </tbody>
</table>

[Google optimize website →](https://marketingplatform.google.com/about/optimize/)


## Installation

`yarn add @sunrise-integration/google-optimize`

`npm install @sunrise-integration/google-optimize`

## Requirements
You will need a [Google Analytics](https://marketingplatform.google.com/about/analytics/), [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/) and [Google Optimize](https://marketingplatform.google.com/about/optimize/) account
   1. Go to `Analytics`, on `Admin` section Create a `DataStream`.
   2. It will show you `Web Stream Details`.
   3. Go to `Tagging Instructions` -> `Use existing on-page tag` -> `Google Tag Manager` and follow the instructions.
   4. It will link your accounts and will allow you to see the data you gather with your experiments
   5. 
## Usage

<table>
  <tbody>
    <tr>
      <td>⚠️</td>
      <td>Before you use these hooks, you need to install @frontend-sdk/google-tag-manager if you don't have it installed and call useGoogleTagManager hook in order to load the analytics</td>
    </tr>
  </tbody>
</table>

[Google Tag Manager Package Docs →](https://docs.getshogun.com/shogun-frontend-integrations/docs/google-tag-manager)

1. First we need to install the Google Optimize script - we need to make a call to `useGoogleOptimize` passing your `optimizeContainerID`.

2. Then you will need to call the event - you need to call to `useGoogleOptimizeEvent` you can pass an `eventName` or if you left blank it will call `optimize.activate` event.
You cannot call `useGoogleOptimizeEvent` without call `useGoogleOptimize` first.

3. You can call `useGoogleOptimizeEvent` like `useGoogleOptimizeEvent(eventName, options)` to cal an specific event.

```jsx
import {useGoogleOptimize} from '@sunrise-integration/google-optimize'
import {useGoogleTagManager} from '@frontend-sdk/google-tag-manager'
import {useGoogleOptimizeEvent} from "./use-google-optimize-event";

const App = () => {
    let optimizeContainerID = 'EXAMPLE';
    useGoogleTagManager({
        containerId: 'GTA-CONTAINER_ID',
        gaSessionId: `${new Date().getTime()}`,
        optimizeContainerId: optimizeContainerID,
    })
    useGoogleOptimize(optimizeContainerID);
    useGoogleOptimizeEvent(); // By Default it will call optimize.activate event
    return <div>...</div>
}
```