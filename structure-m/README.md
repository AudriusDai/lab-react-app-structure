# Application structure M

This component was bootstrapped with [Direflow](https://direflow.io).

```html
<my-app-name></my-app-name>
```

# Setup

## Structure

Followed the setup https://direflow.io/get-started guide.

```
npm i -g direflow-cli
direflow create
```

All structure remains the same as Direflow suggests. Additionally the `../src/app` folder is created which is going to hold all domain application source.

## Redux

Added redux libs from https://redux.js.org/introduction/installation

```
npm install redux
npm install react-redux
npm install --save-dev redux-devtools
npm install @types/react-redux
```

By using chrome redux tools we could gain development points https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en. It's easier to navigate through state changes while developing or debugging in dev stage.

## React Router DOM

Added react router lib from https://reacttraining.com/react-router/web/guides/quick-start

```
npm install react-router-dom
npm install @types/react-router-dom
```

Using `HashRouter` for routing i.e. http://localhost:3000/#/example or http://localhost:3000/#/sample

## Redux-Saga applied

Added `redux-saga` lib for api calls and other sorts of side effects handling. Taken from https://redux-saga.js.org/.

```
npm install --save redux-saga
```

It should help us on doign stuff in parralel, hanlding 'takeLatest', 'takeEvery'and etc.

## Reselect

Reselect lib should help us to save on performance. Cache all requests to state with additional logic layer on top. Cache selectors if none of state changes has happened.
Read 'Motivation' section in https://github.com/reduxjs/reselect.

Check the `../src/app/redux/selectors` folder for samples.

## Use of hooks

How to add hooks into this structure. Custom hooks could be placed under `../src/app/hooks` ?? i.e. `useSampleTable()` to get & set data?

todo: need to watch proper video of hooks usage.

to be written..

## State object structure

We can have all state in one file but switches split into multiple files. Check the `..src/app/redux/initialState.js`

## API calls

Api wrappers can be placed in `../src/app/api` folder. i.e. `sampleApi.ts`, `exampleApi.ts` etc.

## Utils

Utils catalogue created for common pure logic functions. Helpers for formatting, transforming data etc. `../src/app/utils`
