# Frontend Frameworks

## Content

- [About](#about)
- [Submodules](#submodules)
  1. [Introduction to React](#introduction-to-react)
  2. [Multiple Pages](#multiple-pages)
  3. [Reacting to changing variables](#reacting-to-changing-variables)
  4. [Synchronizing with external systems](#synchronizing-with-external-systems)
  5. [TypeScript Intro](#typescript-intro)

## About

![Overview](docs/assets/overview.png)

## Submodules

### Introduction to React
#### [Project](./1-recycled-uis/)

This shows the basic of React and ViteJS project

### Multiple Pages
#### [Project](./2-routing/)

Basic example of how to setup a React SPA (Single Page Application) with a couple of pages. Check the [official tutorial](https://reactrouter.com/en/main/start/tutorial) for a more complex example with data loading.

### Reacting to changing variables
#### [Project](./3-reactive-variables/)

Showcases how to setup componenets in React that react to changing variables. This only showcases how to handle state that is contained within a single component, possibly a subset of your component tree. For variables that encapsulate larger portions of your application **and** that should lead to changes in the DOM when they update you are recommended to bring in larger [State Management Libraries](https://weber-stephen.medium.com/a-comprehensive-comparison-of-react-state-management-libraries-550a0e84c441).

### Synchronizing with external systems
#### [Project](./4-external-systems/)

Often times we need to use variables that are stored outside our React applications. This is sligthly complicated, but this project showcases the most common usage by requesting data from a server and updating a component depending on the status of that request, *in progress*, *completed* and *oh noes, an error happend*.

### TypeScript Intro
#### [Project](./typescript-intro/)

A basic introduction to types and TypeScript. Have a look at the readme and go through the examples. If you want more extensive documentation see the official [TypeScript] homepage.

[TypeScript]: https://www.typescriptlang.org/