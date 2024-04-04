import Header from './components/Header'
import Palettes from './components/Palettes'
import { NavLink } from "react-router-dom";

function App() {

  return (
    <div className='flex flex-col items-center w-screen h-full bg-[#3c40c6] bg-[url(https://flatuicolors.com/static/img/stars-opacity.0979c1.svg)]'>
      <Header/>

      <div className='grid grid-cols-3 grid-rows-3 justify-center items-center gap-5 mb-8'>

        <NavLink to="/material-ui-colors"><Palettes paletteName="Material UI Colors"/></NavLink>
        <NavLink to="/flat-ui-colors"><Palettes paletteName="Flat UI Colors v1"/></NavLink>
        <NavLink to="/dutch-palette"><Palettes paletteName="Flat UI Colors Dutch"/></NavLink>
        <NavLink to="/american-palette"><Palettes paletteName="Flat UI Colors American"/></NavLink>
        <NavLink to="/aussie-palette"><Palettes paletteName="Flat UI Colors Aussie"/></NavLink>
        <NavLink to="/british-palette"><Palettes paletteName="Flat UI Colors British"/></NavLink>
        <NavLink to="/spanish-palette"><Palettes paletteName="Flat UI Colors Spanish"/></NavLink>
        <NavLink to="/indian-palette"><Palettes paletteName="Flat UI Colors Indian"/></NavLink>
        <NavLink to="/french-palette"><Palettes paletteName="Flat UI Colors French"/></NavLink>

      </div>

    </div>
  )

}

export default App
