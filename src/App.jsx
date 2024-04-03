import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Palettes from './components/Palettes'

function App() {

  return (
    //                    justufy-center
    <div className='flex flex-col items-center w-screen h-full bg-[#3c40c6] bg-[url(https://flatuicolors.com/static/img/stars-opacity.0979c1.svg)]'>
      <Header/>

      <div className='grid grid-cols-3 grid-rows-3 justify-center items-center gap-5 mb-8'>
        <Palettes paletteName="Material UI Colors"/>
        <Palettes paletteName="Flat UI Colors v1"/>
        <Palettes paletteName="Flat UI Colors Dutch"/>
        <Palettes paletteName="Flat UI Colors American"/>
        <Palettes paletteName="Flat UI Colors Aussie"/>
        <Palettes paletteName="Flat UI Colors British"/>
        <Palettes paletteName="Flat UI Colors Spanish"/>
        <Palettes paletteName="Flat UI Colors Indian"/>
        <Palettes paletteName="Flat UI Colors French"/>
      </div>

    </div>
  )

}

export default App
