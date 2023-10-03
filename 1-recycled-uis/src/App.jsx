import { LayoutBase } from './components/LayoutBase/LayoutBase'
import { ArticleFeed } from './components/ArticleFeed/ArticleFeed'

function App() {
  return (
    <LayoutBase>
      <section>
        <h2>Articles List</h2>
        <ArticleFeed />
      </section>

    </LayoutBase>
  )
}

export default App
