import React, {  useState } from 'react'
import Headers from './components/Header/Header'
import MainNav from './components/MainNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Container } from '@mui/system';
import Movies from './Pages/Movies/Movies'
import Search from './Pages/Search/Search'
import Series from './Pages/Series/Series'
import Trending from './Pages/Trending/Trending'
import Reactswitch from 'react-switch'
import ThemeContext from './hooks/Context';
const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
          <Headers />
          <div className="app" id={theme}>
           <div className="switch">
           <Reactswitch  onChange={toggleTheme} checked={theme === 'dark'} />
           </div>  
            <Container>
              <Routes>
                <Route path='/' element={<Trending />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/series' element={<Series />} />
                <Route path='/search' element={<Search />} />
                <Route path='/*' element={<Trending />} />
              </Routes>
            </Container>
          </div>
          <MainNav />
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App