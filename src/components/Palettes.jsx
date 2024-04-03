import React from 'react';
import Palettes_list from "../assets/pallete.json";

const Palettes = (props) => {

    const {paletteName = "string"} = props
    const current_palette = Palettes_list.find((palette) => palette.paletteName === paletteName);
    const colors = current_palette.colors;

    return (
        <div className="color-white mt-[10px] rounded-md px-2.5 h-[200px] w-[300px] bg-white cursor-pointer">

            <div className="grid-cols-5 grid-rows-4 w-full h-[140px] mt-2.5 grid">
                {colors.map((color, index) => (
                    <div key={index} className="w-full h-full" style={{ backgroundColor: color.color }}/>
                ))}
            </div>

            <a aria-label='palette' className='text-[18px] mt-[3px] text-[#000] font-semibold h-[40px] leading-[40px] float-left w-full text-left [text-indent:2px] tracking-[.55px]'>
                {current_palette.paletteName}
                <span role='img' aria-label='palette' className='text-right block mt-[-40px]'>{current_palette.emoji}</span>
            </a>
        </div>
    )
}

export default Palettes;