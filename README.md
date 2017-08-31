# Trivial Exchange - fork of Ether Delta smart contract

Depreciated! Fork will no longer be continued.

Already done:

- Port contract to Truffle framework

To do:

- Port tests to Truffle framework

Potential difference proposals:

- Lack of transaction fee
- Time dependent validity of Tokens
- Simplified Token exchange options

## Installation

- Install Dependencies: `npm install`

## Deploy

For local development:

- Run local network: `docker-compose up`
- Run local: `npm run migrate`

For public test network:

- Run on Ropsten: `npm run migrate-ropsten`

For main production network:

- Run on Mainnet: `npm run migrate-production`

## Test

For local testing:

- Run local network: `docker-compose up`
- Run: `npm test`
