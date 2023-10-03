# Component Properties

React provides a way for us to create more flexible components by having a way to pass 
in variables which we can use inside our components. This arguments to the Functional Components are called properties or props for short.

## Examples

1. Basic Properties

<details>
  <summary>
    Definition:
  </summary>

  ```jsx
  function Basic(properties) {
    return (
      <h1>{properties.name}</h1>
    )
  }
  ```
</details>

<details>
  <summary>
    Usage:
  </summary>

  ```jsx
  function App() {
    return (
      <div className="App">
        <Basic name="Foo">
      </div>
    )
  }
  ```
</details>

2. Destructuring of properties
<details>
  <summary>
    Definition:
  </summary>

  ```jsx
  function Destructuring(properties) {
    const { name } = properties
    return (
      <h1>{name}</h1>
    )
  }
  ```
</details>

<details>
  <summary>
    Usage:
  </summary>

  ```jsx
  function App() {
    return (
      <div className="App">
        <Destructuring name="Foo">
      </div>
    )
  }
  ```
</details>

3. Inline Destructuring
<details>
  <summary>
    Definition:
  </summary>

  ```jsx
  function InlineDestructuring({ name }) {
    return (
      <h1>{name}</h1>
    )
  }
  ```
</details>

<details>
  <summary>
    Usage:
  </summary>

  ```jsx
  function App() {
    return (
      <div className="App">
        <InlineDestructuring name="Foo">
      </div>
    )
  }
  ```
</details>

4. Boolean types niceties

<details>
  <summary>
    Definition:
  </summary>

  ```jsx
  function Boolean({ hidden, name }) {
    return (
      <h1 style={hidden ? { display: "none" } : null}>{name}</h1>
    )
  }
  ```
</details>

<details>
  <summary>
    Usage:
  </summary>

  ```jsx
  function App() {
    return (
      <div className="App">
        <Boolean name="Foo">
        <Boolean name="Foo" hidden>
      </div>
    )
  }
  ```
</details>