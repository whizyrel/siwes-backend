# MMS Backend v2.0.0

[![build status](https://github.com/Ashipa-Electric/node-ts-boilerplate/actions/workflows/cd.yml/badge.svg)](https://github.com/Ashipa-Electric/node-ts-boilerplate/actions/workflows/cd.yml)

This is only a boilerplate for Nodejs Typescript. This project is bundled using webpack into a single file with dependencies inclusive.

## Linting

The file [tslint.json](./tslint.json) is intended to contain the rules for linting.

## Testing

The popular script should be used. Mocha and Chai where used for writing the BDD & TDDs.

```js
npm test
```

## Development

Running and Stoping Containers Quick Guide

```bash
docker-compose up -d --build -V
```

```bash
docker-compose down --rmi all -v --remove-orphans
```
