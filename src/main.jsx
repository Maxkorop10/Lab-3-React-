import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import Palette_page from './components/Palette_page.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path = "/material-ui-colors" element = {<Palette_page paletteName="Material UI Colors" />} />
        <Route path = "/flat-ui-colors" element = {<Palette_page paletteName="Flat UI Colors v1" />}/>
        <Route path = "/dutch-palette" element = {<Palette_page paletteName="Flat UI Colors Dutch" />}/>
        <Route path = "/american-palette" element = {<Palette_page paletteName="Flat UI Colors American" />}/>
        <Route path = "/aussie-palette" element = {<Palette_page paletteName="Flat UI Colors Aussie" />}/>
        <Route path = "/british-palette" element = {<Palette_page paletteName="Flat UI Colors British" />}/>
        <Route path = "/spanish-palette" element = {<Palette_page paletteName="Flat UI Colors Spanish" />}/>
        <Route path = "/indian-palette" element = {<Palette_page paletteName="Flat UI Colors Indian" />}/>
        <Route path = "/french-palette" element = {<Palette_page paletteName="Flat UI Colors French" />}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
