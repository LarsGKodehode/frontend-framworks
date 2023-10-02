import { capitalize } from './utils/string-formatting'
import { Logo } from './components/Logo/Logo'
import { Social } from './components/Social/Social'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex justify-between px-2 py-4'>
        <a href='/' className='w-32'>
          <Logo />
        </a>

        <h1 className='text-center'>
          {capitalize(import.meta.env.VITE_APP_NAME)} - v{import.meta.env.VITE_APP_VERSION}
        </h1>
      </header>

      <main className='grow mx-auto'>
        <h2>Main content</h2>
      </main>

      <footer className='py-4'>
        <p className='text-center'>Kodehode</p>
        <div className='flex gap-4 justify-center'>
          <Social platform="twitter" userName="vite_js" />
          <Social platform="github" userName="vitejs" />
        </div>
      </footer>
    </div>
  )
}

export default App
