import { capitalize } from './utilities/capitalize'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <h1 className='text-center'>{capitalize(import.meta.env.VITE_APP_NAME)} - v{import.meta.env.VITE_APP_VERSION}</h1>
      </header>

      <main className='grow mx-auto'>

      </main>

      <footer>
        <p className='text-center'>Kodehodet</p>
      </footer>
    </div>
  )
}

export default App
