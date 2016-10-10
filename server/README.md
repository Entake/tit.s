# Acuity

> Just as magical as a unicorn

This is a REST API server, that provides CRUD capabilities, as well as user authentication, for the Acuity image sharing platform.
The server is built using [Koa](http://koajs.com/) as the server backbone, and [Passport](http://passportjs.org/) as authentication middleware. The code is being compiled from ES2016+ by [Babel](https://babeljs.io/).
It uses [RethinkDB](https://rethinkdb.com/) as the database, for storing data.

## Usage

Acuity server will be able to be launched in two ways - using docker, or using node.
However for now, Node is the only option.

### Using Node

Running the server using Node requires that you have Node.js v6 or later installed.
To run the server locally, do the following:  
1. Clone this repository
2. Enter the `./server` folder
3. Install dependencies with `npm install`
4. Make sure you have a local RethinkDB server running (or start one using `npm run db:create`, requires docker)
5. Start the server using `npm start`
6. Navigate to [http://localhost:8080](http://localhost:8080) in your browser

## Development

Development requires that you have Node.js v6 or later installed.  
To run the server for development, just follow the instuctions from the [Using Node](#using-node) section.  
To run the test suite simply execute `npm test`.
To see all available commands, see package.json.

## Contributing

For bug fixes, documentation changes, and small features:  
1. Fork this repository  
2. Create your feature branch (`git checkout -b my-new-feature`)  
3. Commit your changes (`git commit -am 'Add some feature'`)  
4. Push to the branch (`git push origin my-new-feature`)  
5. Create a new Pull Request  

For larger new features: Do everything as above, but first also make contact with the project maintainers to be sure that your change fits with the project direction, so that you won't be wasting effort going in the wrong direction.

## License

[MIT](https://opensource.org/licenses/mit-license)