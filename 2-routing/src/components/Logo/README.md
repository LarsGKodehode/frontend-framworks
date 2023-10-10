# React Components

## The Basics
There is at its core two things to creating a React component

1. The new type JSX, think of these as string literals

```jsx
const newTypeJSX = ( <h1>Hello World</h1>)
```

2. A function which returns JSX, this is what we call a React Functional Component or just component for short.

```jsx
function ReactFunctionalComponent() {
  return (
    <h1>This is a reusable bit of HTML</h1>
  )
}
```

3. You can nesting React Components within each other:

```jsx
function ListOfCards() {
  return (
    <ul>
      <li>
        <Card />
      </li>

      <li>
        <Card />
      </li>
    </ul>
  )
}

function Card() {
  return (
    <article>
      <h2>Card</h2>
    </article>
  )
}
```

4. Keep things organized, Vite uses EcmaScript Modules and you can too. Don't try for anything overly complicated just start off with creating a folder named components and store all of your components in there, make it easier when everything is in one place