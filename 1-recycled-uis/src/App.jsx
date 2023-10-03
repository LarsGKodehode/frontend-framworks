import { LayoutBase } from './components/LayoutBase/LayoutBase'
import { ArticleFeed } from './components/ArticleFeed/ArticleFeed'

function App() {
  return (
    <LayoutBase>
      <section>
        <h2>Rendering lists</h2>
        <ul>
          {
            [
              (<li key={1}>Item 1</li>),
              (<li key={2}>Item 2</li>),
              (<li key={3}>Item 3</li>),
              (<li key={4}>Item 4</li>),
              (<li key={5}>Item 5</li>),
              (<li key={6}>Item 6</li>),
            ]
          }
        </ul>
      </section>

      <section>
        <h2>Articles List</h2>
        <ArticleFeed />
      </section>

    </LayoutBase>
  )
}

export default App
