import { Outlet, Link } from 'react-router-dom'
import { capitalize } from '../utilities/capitalize'
import { Logo } from '../components/Logo/Logo'
import { Social } from '../components/Social/Social'

export function LayoutBase() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex justify-between px-2 py-4'>
        <Link href='/' className='w-32'>
          <Logo />
        </Link>
      </header>

      <section>
        <h1 className='text-center'>
          {capitalize(import.meta.env.VITE_APP_NAME)} - v{import.meta.env.VITE_APP_VERSION}
        </h1>
      </section>

      <div className='grow flex flex-col'>
        <Outlet />
      </div>

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