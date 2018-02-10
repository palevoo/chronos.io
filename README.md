# Chronos.io

A distributed time travel app, where you can record video message and send it to the future.

![Chronos.io in action](presi.gif)

## Getting Started

Fork this repo, clone your fork.

### Installing

A step by step series of examples that tell you have to get a development env running

In client
```
npm install
npm start
```

In server folder
```
npm install
node or nodemon index.js
mongod
```

Have fun

## Built With Love and:

* [React](http://www.dropwizard.io/1.0.2/docs/) - Frontend Web Framework
* [IPFS](https://maven.apache.org/) - Inter Planetary File System to store videos forever
* [WebRTC](https://rometools.github.io/rome/) - RecordRTC library to record live streams from user's devices
* [Express](https://rometools.github.io/rome/) - Back end + runs CRON to send recordings
* [MongoDB](https://rometools.github.io/rome/) - Database to store user emails and ipfs hashes

## Running the tests

Yet to be written

## Deployment

Yet to be deployed

## Contributing & Issues

Please feel free to contribute or report issues/bugs.

## Authors

* **Nikitq Kudryqvtsev** - *Full Stack Architect* - [Palevoo](https://github.com/palevoo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Future

* Create Ethereum smart contract to which you can send funds with hash of video location, which would only unfreeze in given period.
* Create an oracle on EVM (Ethereum Virtual Machine) to query smart contract (CRON)
* Improve UI (add clock, visuals and design)
