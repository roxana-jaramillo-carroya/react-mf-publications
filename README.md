#react-mf-publications
[![node](https://img.shields.io/badge/node-v11.3.X-yellow.svg)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-6.X-green.svg)](https://www.npmjs.com/)

> This project contains the legacy application wrapper for the microfrontend POC.
>
> Developed with all :heart: in the world by ADL DevOps team

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](http://git-scm.com/)
- [Node](https://nodejs.org)

This project has a dependency on build time of `poc-mf-common-lib` (please verify that you already have this project installed and built) and on runtime of `banca-virtual` so for development purposes, `banca-virtual` should be running on `feature/microfrontends` branch and on `http://localhost:8100` url. Aditionally the project uses module federation, because of that, it can be run in two modes:

### Standalone mode

To run the project in standalone mode just run the start command:

```
npm run start
```

### Microfrontend Mode

To run the project in microfrontend mode, you should run the `poc-mf-shell` project and then, run this project with the following command:

```
npm run serve:microfrontend
```

## Build

---

A production build can be achieved by running:

```
npm run build
```

The project will be transpiled as a microfrontend in production mode

## Contributing

If you find this repo useful here's how you can help:

1. Send a Merge Request with your awesome new features and bug fixes
2. Wait for a Coronita :beer: you deserve it.

## Further Reading / Useful Links
