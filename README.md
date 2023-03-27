# What is Software Automatic Mouth (SAM)?

[SAM](https://en.wikipedia.org/wiki/Software_Automatic_Mouth) is a speech synthesis program that was created in 1982 by Mark Barton.

# What is this npm module?

This is a wrapper for the reverse-engineered C version of SAM as created by [s-macke](https://github.com/s-macke/SAM).

# Installing

Using npm:

```bash
npm install software-automatic-mouth
```

Using git:

```bash
git clone https://github.com/SeizedThoughts/node-software-automatic-mouth.git
```

# Getting Started

To get started, just call import the package.

```js
const SAM = require('software-automatic-mouth');

//YOUR CODE HERE
```

# Config

There are several options, passed by value, available for all methods. (Listed values are default.)

```js
//This is the classic "SAM" voice
{
    speed: 72,
    pitch: 64,
    throat: 128,
    mouth: 128
}
```

## Voices

A voice can be passed as a config without modification as they are themselves configs. Below are the voices that are available by default.

The default voice is `voices.SAM`.

- [Elf](#elf)
- [Extra Terrestrial](#extra-terrestrial)
- [Little Old Lady](#little-old-lady)
- [Little Robot](#little-robot)
- [SAM](#sam)
- [Stuffy Guy](#stuffy-guy)

### Elf

```js
{
    speed: 72,
    pitch: 64,
    throat: 110,
    mouth: 160
}
```

### Extra Terrestrial

```js
{
    speed: 100,
    pitch: 64,
    throat: 150,
    mouth: 200
}
```

### Little Old Lady

```js
{
    speed: 82,
    pitch: 32,
    throat: 145,
    mouth: 145
}
```

### Little Robot

```js
{
    speed: 92,
    pitch: 60,
    throat: 190,
    mouth: 190
}
```

### SAM

```js
//This is the classic "SAM" voice
{
    speed: 72,
    pitch: 64,
    throat: 128,
    mouth: 128
}
```

### Stuffy Guy

```js
{
    speed: 82,
    pitch: 72,
    throat: 110,
    mouth: 105
}
```

# Usage

- [say](#say)

## say

This takes in text and a config and returns a `Promise` for a .wav buffer.

```js
SAM.say('Hello, world!', SAM.voices.SAM).then((data) => {
    require('fs').writeFileSync('hello-world.wav', data);
}).catch((err) => {
    console.log(`SAM failed to generate audio. Reason: ${err.message}`);
})
```

# Access Patterns

The `retry-agent` module exports the following:

```js
{
    say: require('./SAM/say'),
    voices: require('./voices')
}
```

# License

As described by [s-macke](https://github.com/s-macke/SAM#license):

The software is a reverse-engineered version of a software published more than 34 years ago by "Don't ask Software".

The company no longer exists. Any attempt to contact the original authors failed. Hence S.A.M. can be best described as Abandonware (http://en.wikipedia.org/wiki/Abandonware)

As long this is the case I cannot put my code under any specific open source software license. However the software might be used under the "Fair Use" act (https://en.wikipedia.org/wiki/FAIR_USE_Act) in the USA.

That being said, SAM's creator Mark Barton recently did an [interview](https://archive.org/details/Mark-Barton-Software-Automatic-Mouth/Mark+Barton+320.mp3) where he acknowledged the C reverse-engineered version and seemed to have no issue with its distribution.

# Contributing

If you would like to contribute or create an issue, please do so at the official [GitHub page](https://github.com/SeizedBots/software-automatic-mouth).