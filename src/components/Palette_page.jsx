import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Palettes_list from "../assets/pallete.json";
import Sound from "../assets/src_notify.mp3";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Palette_page = (props) => {

    const {paletteName = "string"} = props
    const current_palette = Palettes_list.find((palette) => palette.paletteName === paletteName);
    const colors = current_palette.colors;

    const [copiedBlock, setCopiedBlock] = useState(new Set());
    const [hoverBlock, setHoverBlock] = useState(null);
    const [clickBlock, setClickBlock] = useState(null);
    const [baseColor, setBaseColor] = useState(null);

    const Copy_color = (color) => {
        setCopiedBlock(new Set([color]));
        setBaseColor(color);
        Play_Sound();

        setTimeout(() => {
            setCopiedBlock(new Set());
            setBaseColor(null);
        }, 1500);
    }

    const Play_Sound = () => {
        const sound = new Audio(Sound);
        sound.play();
    }

    return (
        <div className="relative">
            <h2 className="text-[25px] text-black left-[2px] bottom-[5px] font-semibold cursor-pointer px-2.5 mt-1"><NavLink to="/">← Back</NavLink></h2>

            <div className="grid grid-cols-5 grid-rows-4 w-full h-[650px] p-2.5 w-auto">
                {colors.map((color, index) => (
                    <CopyToClipboard key={index} text={color.color} onCopy={() => Copy_color(color)}>
                        <div className="relative cursor-pointer" style={{backgroundColor: color.color}}
                            onMouseEnter = {() => setHoverBlock(color.color)}
                            onMouseLeave = {() => setHoverBlock(null)}
                            onClick = {() => setClickBlock(color.color)}>
                                {hoverBlock === color.color && !copiedBlock.has(color.color) && (
                                <div className="border-[2px] border-[solid] border-[white] bg-[rgba(0,_0,_0,_0.1)] text-[#fff] text-[21px] rounded-[4px] flex justify-center items-center w-full h-full">
                                    COPY
                                </div> )} {clickBlock === color.color}
                            <div className="absolute bottom-[0px] right-[0px] mr-[10px] p-[4px] text-[20px] uppercase font-semibold" style={{ color:(color.color==="#fff")?'#c9c1c6':'#fff'}}>{color.name}</div>
                        </div>
                    </CopyToClipboard>
                ))}
            </div>

            <div className="text-[36px] text-[black] text-[16px] px-2.5 left-[2px] bottom-[5px] tracking-[2.5px] font-medium font-black text-right">
                {current_palette.paletteName}
            </div>

            {baseColor && (
                <div className="modal" style={{ backgroundColor: baseColor.color, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}>
                    <div className="absolute w-screen h-[240px] text-white bg-[rgba(255,_255,_255,_0.15)] top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center text-[36px] items-center">
                        <h1 className="text-[80px] font-semibold drop-shadow-2xl justify-center">Right One!</h1>
                        <div className="drop-shadow-lg">
                            <h2>{baseColor.name.toUpperCase()}</h2>
                            <p>{baseColor.color}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Palette_page;