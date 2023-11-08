# TypeScript Intro
## [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Content

- [Setting up your own TypeScript project](#setting-up-your-own-typescript-project)
- [Write some actual TypeScript types](#write-some-actual-typescript-types)

## Setting up your own TypeScript project

### Prerequisites

- [Node Installed]()<br>
  You can check which version you have installed with `node --version`

### Steps

1. Create a new directory
```sh
mkdir my-typescript-project
```
2. Move your terminal into the new folder
```sh
cd my-typescript-project
```
3. Initialize a new empty Node project
```sh
# --yes sets a minimum of default values for your project
npm init --yes

# If you want to go through the setup wizard, don't include it
npm init
```
4. Install the [Typescript package](https://www.npmjs.com/package/typescript)
```sh
# --save-dev seperates your development dependencies from your runtime dependencies
npm install --save-dev typescript
```
5. Use the [TypeScript Compiler]() to generate the typescript configuration file
```sh
npx tsc --init 
```
6. Create your first TypeScrip file
```sh
touch main.ts
```
7. Add some code to the file (no TypeScript specific code just yet)
```ts
// main.ts
console.log("Hello World")
```
8. Compile (Translate) your code to JavaScript so we can execute it with Node
```sh
npx tsc
```
9. Look at the new file that was created `main.js` and execute the file by giving it to Node
```sh
node main.js
```

10. Setup a script inn your `package.json` under the "scripts" section to simplify the steps
```json
"scripts": {
    "start": "tsc && node main.js"
  },
```
<details>
<summary>Full file</summary>

```json
{
  "name": "typescript-intro",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc && node main.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.2.2"
  }
}
```
</details>

11. Test your new script out
```sh
npm run start
```

## Write some actual TypeScript types

In this quick guide, we'll cover some fundamental aspects of TypeScript. TypeScript is a statically-typed superset of JavaScript that helps catch errors early and provides better tooling support. Let's dive in!

1. **Type Declarations:**

   Replace your previous code with the following:

   ```ts
   const fullName: string = "John Doe";
   const greeting: string = `Greetings, ${fullName}`;
   ```

2. **Type Errors:**

   Try using different types and observe the error messages. TypeScript helps catch these errors early, making it a valuable tool for development.

3. **Compilation and JavaScript:**

   When you compile your TypeScript code (e.g., `tsc main.ts`), the resulting `main.js` file will have the type annotations removed. This is necessary for running your code in a web browser since browsers only understand JavaScript.

4. **Typed Functions:**

   Define a function with typed parameters:

   ```ts
   function sum(a: number, b: number) {
     return a + b;
   }
   ```

   Now, call the function with numbers and non-numbers to see how TypeScript enforces type safety.

5. **Type Inference:**

   While TypeScript's type inference is valuable for reducing verbosity, finding the right balance between type inference and explicit typing is essential. Consider the following example:
   
   ```ts
   const fullName = "Jack Black"
   const newAge = 32

   function createBirthdayGreeting(name: string, age: number) {
    return `Congratulation with staying alive for ${age} years ${name}!!`
   }

   const birthdayGreeting = createBirthdayGreeting(fullName, newAge)
   console.log(birthdayGreeting)
   ```

   Notice how TypeScript infers the types for fullName and newAge variables, while we still would get type errors if we tried to give our typed function arguments of the wrong type.

## Typing Objects and Arrays

Let's see how we can type arrays and objects to ensure we consistency and structure within our application.

1. **Typing Objects:**

   Define an object with specified types for its properties:

   ```ts
   type User = {
     name: string;
     age: number;
     isAdmin: boolean;
   };

   const user: User = {
     name: "Alice",
     age: 30,
     isAdmin: false,
   };
   ```

   There are two things to note here.
   One, your IDE knows which fields are part of the object and helps you with autocompletion hints when writing the fields.
   Two, you get errors when the type of the field does not match the type you have specified.

2. **Typing Arrays:**

   Create an array with a specific data type:

   ```ts
   const numbers: number[] = [1, 2, 3, 4, 5];
   const names: string[] = ["Alice", "Bob", "Charlie"];
   ```

   Experiment with appending elements of different types to these arrays and observe how TypeScript ensures type conformity.
