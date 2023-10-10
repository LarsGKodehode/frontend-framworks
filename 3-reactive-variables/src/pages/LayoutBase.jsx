import { Outlet, Link, NavLink } from 'react-router-dom'
import { capitalize } from '../utilities/capitalize'
import { Logo } from '../components/Logo/Logo'
import { Social } from '../components/Social/Social'
import { Counter } from '../components/Counter/Counter'

export function LayoutBase() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex justify-around items-center px-8 py-4 bg-primary fg-secondary'>
        <Link to='/' className='w-32'>
          <Logo />
        </Link>

        <h1 className='text-center'>
          {capitalize(import.meta.env.VITE_APP_NAME)} - v{import.meta.env.VITE_APP_VERSION}
        </h1>

        <nav>
          <ul className='flex gap-16 bold'>
            <li>
              <NavLink className={({ isActive }) => isActive ? "underline fg-white" : ""} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "underline fg-white" : ""} to="/About">About</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className='flex'>
        <div className='grow flex flex-col py-4'>
          <Outlet />
        </div>

        <aside className='flex flex-col px-16 gap-4 sticky top-64 py-8 h-content'>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </aside>
      </div>

      <footer className='py-8 bg-primary fg-secondary'>
        <div className='flex gap-16 justify-center'>
          <Social platform="twitter" userName="twittewr" />
          <Social platform="github" userName="github" />
          <Social platform="linkedin" userName="linkedin" />
        </div>
        <p className='text-center'>Kodehode</p>
      </footer>
    </div>
  )
}