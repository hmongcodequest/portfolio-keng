import { createBrowserRouter } from 'react-router'

import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import NotFoundPage from './pages/NotFoundPage'
import ForgotPassword from './pages/ForgotPassword'

// import Conlrols from './pages/Conlrols'
import ConlrolsDashboard from './pages/Controls/Dashboards'
import ConlrolsCategories from './pages/Controls/Categories'
import ConlrolsSkills from './pages/Controls/Skills'
import ConlrolsMessages from './pages/Controls/Messages'
import ConlrolsProjects from './pages/Controls/Projects'
import ConlrolsSettings from './pages/Controls/Settings'
import ConlrolsCV from './pages/Controls/CV'
import ConlrolsPages from './pages/Controls/Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />, 
  },
  {
    path: '/contact',
    element: <Contact />, 
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />, 
  },
  {
    path: '/controls/dashboard',
    element: <ConlrolsDashboard />, 
  },
  {
    path: '/controls/projects',
    element: <ConlrolsProjects />,
  },
  {
    path: '/controls/categories',
    element: <ConlrolsCategories />,
  },
  {
    path: '/controls/skills',
    element: <ConlrolsSkills />,
  },
  {
    path: '/controls/messages',
    element: <ConlrolsMessages />, 
  },
  {
    path: '/controls/settings',
    element: <ConlrolsSettings />, 
  },
  {
    path: '/controls/cv',
    element: <ConlrolsCV />, 
  },
  {
    path: '/controls/pages',
    element: <ConlrolsPages />, 
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
])
export default router