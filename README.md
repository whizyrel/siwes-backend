# MMS Backend v2.0.0

[![build status](https://github.com/Ashipa-Electric/ashipa-mms-backend/actions/workflows/cd.yml/badge.svg)](https://github.com/Ashipa-Electric/ashipa-mms-backend/actions/workflows/cd.yml)

This is the official RESTful Service for the MMS v2.0.0. Purpose of this RESTful Service is described below.
Visit link here [RESTful service](https://mms-staging.ashipaelectric.com:9090). This project is bundles using webpack into a single file dependencies inclusive.

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
