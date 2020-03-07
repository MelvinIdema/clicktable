<p align="center">

# Clicktable  <br>
[![Generic badge](https://img.shields.io/badge/VERSION-1.1-<COLOR>.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/LICENSE-MIT-green.svg)](https://shields.io/)
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/issues/)

</p>

## Installation
First update NPM and install clicktable in your dependencies:
```
npm i -g npm
npm i --save clicktable
```

Then require and initialize Clicktable:
```javascript
const Clicktable = require("clicktable");
const clickMe = new Clicktable();
```

Now all you need to do is add the data-href attribute to your table rows:
```HTML
<table>
  <tr>
    <th>Package</th>
    <th>Version</th>
    <th>Language</th>
  </tr>
  <tr data-href="https://www.npmjs.com/package/clicktable">
    <td>Clicktable</td>
    <td>1.1.0</td>
    <td>Javascript</td>
  </tr>
</table>
```

## Options

Since V1.1.0 Clicktable automatically inserts a default styling. This styling is the same as the user-agent styling of most modern browsers for anchor links and is easily overwritten in your CSS style. If you want to manually shut off the default styling just pass `"style": "none"` as option.
```javascript
const clickMe = new Clicktable({
  style: "none"
});
```
