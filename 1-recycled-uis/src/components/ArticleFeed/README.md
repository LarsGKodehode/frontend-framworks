# Lists of Components

Often times in programming we are working with some form of list. Be that a list of task that needs doing or a list of information we need to render.
React has built in functionality for rendering lists of items.

```jsx
functions App() {
  return (
    <ul>
      {
        [
          ( <li key={1}>Item 1</li> ),
          ( <li key={2}>Item 2</li> ),
          ( <li key={3}>Item 3</li> ),
          ( <li key={4}>Item 4</li> ),
          ( <li key={5}>Item 5</li> ),
          ( <li key={6}>Item 6</li> ),
        ]
      }
    </ul>
  )
}
```

The only extra thing here is the key property, `<li key={1}>`. It is a quirk to enable React to correctly track the different components.
The key property is required to be locally unique among it's siblings, and it should be stable across the components lifetime.

Since React is capable of rendering lists of JSX we can use normal JavaScript methods for creating those lists. The most used one is the [Array.prototyp.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

```jsx
function App() {
  const tasks = [
    {id: 1, name: "Feed Sharks"},
    {id: 2, name: "Greet Dawn"},
    {id: 3, name: "Mince Meat"},
    {id: 4, name: "Take a swim"},
  ]

  return (
    <ul>
      {
        tasks.map(task => {
          return (
            <li key={task.id}>
              {task.name}
            </li>
          )
        })
      }
    </ul>
  )
}
```

For more complex data we usually create a seperate component which only responsibility is for rendering a single data item. And just passing in the data through a property.

```jsx
import employees from '../data/employees'

function App() {
  return (
    <ul>
      {
        emlployees.map(employee => {
          return (
            <li key={employee.id}>
              <EmployeeCard employee={employee} />
            </li>
          )
        })
      }
    </ul>
  )
}

function EmployeeCard(properties) {
  const {employee} = properties

  return (
    <article>
      <h2>{employee.name}</h2>

      <div>
        <img src={employee.image}>

        <div>
          <p>Title: {employee.title}</p>
          <p>Department: {employee.department}</p>
        </div>
      </div>
    </article>
  )
}
```