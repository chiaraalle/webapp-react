import DefaultLayout from './layouts/DefaultLayout'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={ DefaultLayout }>
            <Route path='/' Component={Home}/>
            <Route path='/movies/:id' Component={MoviePage}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App