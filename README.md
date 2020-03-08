<p align="center"><a href="https://clicktable.dev/"><img src="assets/img/logo.png"></a></p>

<p align="center">
  <a href="https://clicktable.dev"><img src="https://img.shields.io/badge/version-1.1-blue.svg"></a>
  <a href="https://clicktable.dev"><img src="https://img.shields.io/badge/license-MIT-green.svg"></a>
  <a href="https:/clicktable.dev"><img src="https://img.shields.io/github/issues/MelvinIdema/Clicktable.svg"></a>
</p>

Clicktable (/klɪktəbl/ like clickable) is a lightweight module to help you easily make your table rows act like anchor links.

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
Done! Your table rows now act like a normal anchor link:
![Demonstration](https://i.imgur.com/iPNbsPu.gif)

## Options

Since V1.1.0 Clicktable automatically inserts a default styling. This styling is the same as the user-agent styling of most modern browsers for anchor links and is easily overwritten in your CSS style. If you want to manually shut off the default styling just pass `"style": "none"` as option.
```javascript
const clickMe = new Clicktable({
  style: "none"
});
```
