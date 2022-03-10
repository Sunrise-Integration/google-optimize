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

`yarn add @frontend-sdk/google-optimize`

`npm install @frontend-sdk/google-optimize`

## Usage

<table>
  <tbody>
    <tr>
      <td>⚠️</td>
      <td>Before you use these hooks, you need to install @frontend-sdk/google-tag-manager if you don't have it installed and call `useGoogleTagManager` hook in order to load the analytics</td>
    </tr>
  </tbody>
</table>


First we need to install the Google Optimize script - we need to make a call to `useGoogleOptimize` passing your `optimizeContainerID`

```jsx
import {useGoogleOptimize} from '@frontend-sdk/google-optimize'
import {useGoogleTagManager} from '@frontend-sdk/google-tag-manager'

const App = () => {
    useGoogleTagManager({
      containerId: 'G-CONTAINER_ID',
      gaSessionId: `${new Date().getTime()}`
    })    
    let optimizeContainerID = 'EXAMPLE';
    useGoogleOptimize(optimizeContainerID);

    return <div>...</div>
}
```

Then you will need to call the event - you need to call to `useGoogleOptimizeEvent` you can pass an `eventName` or if you left blank it will call `optimize.activate` event.
You cannot call `useGoogleOptimizeEvent` without call `useGoogleOptimize` first. 
