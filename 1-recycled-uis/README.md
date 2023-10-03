# Recycled UIs

## Content

- [Prerequisites](#prerequisites)
- [Setting up a new project](#setting-up-a-new-project)
- [Examples](#examples)
- [Links](#links)
- [Extras](#extras--not-covered-in-class)

## Prerequisites

1. [NodeJS](https://nodejs.org/en) Installed
    Check by typing `node --version` in your terminal. You need a version greater than 16 to use ViteJS
    See [here](https://nodejs.dev/en/about/releases/) for NodeJS release schedule
2. [NPM](https://docs.npmjs.com/) We will also make use of the Node package manager NPM. It comes bundled
    with Node, so nothing to install seperatly

## Setting up a new project
1. Creates a new project using the latest version of Vite in a new folder:
```sh
npm create vite@latest
```

2. When starting a new project, remember to download all the dependencies described by the `package.json`:
```sh
npm install
```

3. Once everything is installed, you can boot up the development server:
```sh
npm run dev
```

## Examples

### Basic Component

The simplest React Component
[Code](src/components/Logo/)

### Component Variations

How to create components with variations
[Code](src/components/Social/)

### Container Components

How to setup container components
[Code](src/components/LayoutBase/)

### Rendering Lists

How to render lists of data
[Code](src/components/ArticleFeed/)

## Links

- [NPM Repository](https://www.npmjs.com/)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Netlify](https://netlify.com/)

## Extras<br>*- Not covered in class*

### Environment Variables

Sometimes we have a set of values that are used throughout our project and we want to lift them up, so we only have a single place to edit them and then propogate out to where they are used. This is something Environment Variables can be used for. These are variables that normally are set in the Operating Systems and are available to every application running on one machine. We are not going to use exactly those, but a derivative through an `.env` file. This file will get loaded by ViteJS and any variables whitin will be available inside every source file through a object `import.meta.env.<NAME_OF_ENV_VARAIBLE>`, one can also use it inside `index.html` with a special syntax `%<NAME_OF_ENV_VARIABLE>%`.

[ViteJS Environment Variables](https://vitejs.dev/guide/env-and-mode.html).