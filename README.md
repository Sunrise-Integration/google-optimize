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

First we need to install the Google Optimize script - we need to make a call to `useGoogleOptimize` passing your `optimizeContainerID`

```jsx
import {useGoogleOptimize} from '@frontend-sdk/google-optimize'

const App = () => {
    
    let optimizeContainerID = 'EXAMPLE';
    useGoogleOptimize(optimizeContainerID);

    return <div>...</div>
}
```