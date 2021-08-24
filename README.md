<h1 align="center">Welcome to animated-button 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/animated-button" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/animated-button.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/webnostix" target="_blank">
    <img alt="Twitter: webnostix" src="https://img.shields.io/twitter/follow/webnostix.svg?style=social" />
  </a>
</p>

> 'Animated button component usyng styled components written in react'

## Install

```sh
npm install
```

## Usage

```js
import AnimatedButton from "animated-button";

function App() {
  return (
    <div>
      <AnimatedButton
        primary
        sml
        loading=false
        text="Click Me"
        handleClick={() => console.log("Clicked me!")}
      ></AnimatedButton>
    </div>
  );
}

export default App;
```

## Author

👤 **Rob Duffus, webnostix**

* Website: https://developer-resume.leon4.now.sh/
* Twitter: [@webnostix](https://twitter.com/webnostix)
* Github: [@moringaman](https://github.com/moringaman)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_