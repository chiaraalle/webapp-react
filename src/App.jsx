import DefaultLayout from './layouts/DefaultLayout'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import CreateMoviePage from './pages/CreateMoviePage'
import GlobalContext from './context/globalContext'; 
import { useState } from 'react';

function App() {
  const [ isLoading, setIsLoading ] = useState(false)
  return (
    <>
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route Component={ DefaultLayout }>
            <Route path='/' Component={Home}/>
            <Route path='/movies/:id' Component={MoviePage}/>
            <Route path='/movies/create' Component={CreateMoviePage}/> 
          </Route>
        </Routes>
      
      </BrowserRouter>
    </GlobalContext.Provider>
    </>
  )
}

export default App