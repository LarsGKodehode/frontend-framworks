import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { LayoutBase } from './pages/LayoutBase'
import { LandingPage } from './pages/LandingPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { AboutPage } from './pages/about/AboutPage'

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<LayoutBase />}>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<AboutPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
