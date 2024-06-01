import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { useRoutes } from "react-router-dom";


import AbotPage from './pages/AboutPage'
import SettingsPage from './pages/SettingsPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'

// import SearchPage from './pages/SearchPage'
// import ArticlePage from './pages/ArticlePage'
// import MassagesPage from './pages/MassagesPage'
// import ChatPage from './pages/ChatPage'
// import SearchQueryPage from './pages/SearchQueryPage'

const SearchPage = lazy(() => import('./pages/SearchPage'))
const ArticlePage = lazy(() => import('./pages/ArticlePage'))
const MassagesPage = lazy(() => import('./pages/MassagesPage'))
const ChatPage = lazy(() => import('./pages/ChatPage'))
const SearchQueryPage = lazy(() => import('./pages/SearchQueryPage'))


const RequiredAuth = lazy(() => import('./components/RequiredAuth'))
const ProtectedPage = lazy(() => import('./pages/ProtectedPage'))



function App() {

  // const routes = useRoutes([
  //   { path: "/", element: <Home /> },
  //   {
  //     path: "/invoices",
  //     element: <Invoices />,
  //     children: [
  //       { path: ":id", element: <Invoice /> },
  //       { path: "/pending", element: <Pending /> },
  //       { path: "/complete", element: <Complete /> },
  //     ],
  //   },
  //   {
  //     path: "/users",
  //     element: <Users />,
  //     children: [
  //       { path: ":id", element: <Profile /> },
  //       { path: "/settings", element: <Settings /> },
  //     ],
  //   },
  // ]);

  return (
    <div>

      <NavBar />

      <hr style={{ width: '100%' }} />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AbotPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/search' element={<SearchPage fromHome={false} searchTitle='This is search title from Link Tag' />} />

          <Route path='/article/:articleId' element={<ArticlePage />} />

          {/* <Route path='/massages' element={<MassagesPage />} /> */}
          {/* <Route path='/massages/*' element={<MassagesPage />} /> */}

          <Route path='/massages' element={<MassagesPage />}>
            <Route path=':id' element={<ChatPage />} />
          </Route>

          <Route path='/searchquery' element={<SearchQueryPage title='This is title from state,' />} />

          <Route path='/protected' element={
            <RequiredAuth>
              <ProtectedPage />
            </RequiredAuth>} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>

        {/* {routes} */}
      </Suspense>
    </div>
  )
}

export default App
