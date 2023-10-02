# Children Props<br>*- Container Components*

Normal HTML has some nice elements which acts as containers for other elements. It would be nice to be able to create components which acts as layout components for our applications.

React provides the special children property for this exact purpose.

## Example

Definition:

```jsx
function Container({children}) {
  return (
    <div className="container class names">
      {children}
    </div>
  )
}
```

Usage:
```jsx
function App() {
  return (
    <div className="App">
      <Container>
        <h2>I am rendered inside a continer component</h2>
      </Container>
    <div>
  )
}
```