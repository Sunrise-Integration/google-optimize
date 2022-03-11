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

[Google Optimize website →](https://marketingplatform.google.com/about/optimize/)

[Google Optimize developer docs →](https://developers.google.com/optimize/devguides/experiments?technology=ga4)


## Installation

`yarn add @sunrise-integration/google-optimize`

`npm install @sunrise-integration/google-optimize`

## Requirements
You will need a [Google Analytics](https://marketingplatform.google.com/about/analytics/), [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/) and [Google Optimize](https://marketingplatform.google.com/about/optimize/) account

1. Follow these [instructions](https://support.google.com/tagmanager/answer/6103696) to set up your Google Tag Manager account. Do not install the script, it will be injected through the @frontend-sdk/google-tag-manager package

2. Follow these [instructions](https://support.google.com/analytics/answer/9304153) to set up your Google Analytics account with a property and data stream
3. Go to `Tagging Instructions` -> `Use existing on-page tag` -> `Google Tag Manager` and follow the instructions.
4. Configure a Google Optimize [experiment](https://developers.google.com/optimize/devguides/experiments) to acquire a `optimizeContainerId`

## Usage

<table>
  <tbody>
    <tr>
      <td>⚠️</td>
      <td>Before you use these hooks, you need to install <a href="https://www.npmjs.com/package/@frontend-sdk/google-tag-manager">@frontend-sdk/google-tag-manager</a> and call <code>useGoogleTagManager</code> hook in order to load the analytics</td>
    </tr>
  </tbody>
</table>

1. Initialize Google Optimize with the `useGoogleOptimize` hook by passing your `optimizeContainerID` provided by Google Optimize.

2. Events can be fired with the `useGoogleOptimizeEvent(eventName = 'optimize.activate', options = {})` hook. You may pass a [custom event](https://support.google.com/optimize/answer/7008840) name otherwise the `optimize.activate` event will be fired.

Instantiate Google Tag Manager and Google Optimize:
```jsx
import {useGoogleTagManager} from '@frontend-sdk/google-tag-manager'
import {useGoogleOptimize} from '@sunrise-integration/google-optimize'

const App = () => {
    const optimizeContainerId = 'OPT-XXXXXXX';
    useGoogleTagManager({
        containerId: 'GTM-XXXXXXX',
        gaSessionId: `${new Date().getTime()}`,
        optimizeContainerId: optimizeContainerId,
    })
    useGoogleOptimize(optimizeContainerId);
    return <div>...</div>
}
```

Firing the default `optimize.activate` event on a page:
```jsx
import {useGoogleOptimizeEvent} from '@sunrise-integration/google-optimize'

const Page = () => {
    useGoogleOptimizeEvent(); // By Default it will call optimize.activate event
    return <div>...</div>
}
```

Firing a custom event named `custom-event-name` with options on a page:
```jsx
import {useGoogleOptimizeEvent} from '@sunrise-integration/google-optimize'

const Page = () => {
    useGoogleOptimizeEvent('custom-event-name', {
      'experiment_id': 'experimentId',
      'variant_id': 'variationId',
      'send_to': 'GA_MEASUREMENT_ID',
    });
    return <div>...</div>
}
```
