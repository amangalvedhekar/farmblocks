# Farmblocks-Alert 

A React component for displaying messages on an alert bar.

## Installation

```
npm install @crave/farmblocks-alert
```

## Spec

![screen shot 2017-09-24 at 6 13 31 pm](https://user-images.githubusercontent.com/7760/30786905-30965154-a154-11e7-9659-bf78d3773068.png)

## Usage

```jsx
const React = require('react');
const ReactDOM = require('react-dom');
const Alert = require('@crave/farmblocks-alert');

ReactDOM.render(
    <Alert>
        Hello World!
    </Alert>,
    document.getElementById('root')
)
```