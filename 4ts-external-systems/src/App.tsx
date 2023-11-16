import { ExampleUseEffect } from "./components/UseEffect/ExampleUseEffect"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1 className="text-center">TS, React & External Systems</h1>
      </header>

      <main className="grow">
        <section>
          <h2>Fetching Data</h2>
          
        </section>

        <section>
          <h2>Use Effect</h2>
          <ExampleUseEffect />
        </section>
      </main>

      <footer>
        <p className="text-center">Kodehodet</p>
      </footer>
    </div>
  )
}

export default App
