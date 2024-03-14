import React, {FC,  type ReactNode } from "react"
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

type HeaderProp = {
    image : {
        src : string,
        alt : string
    },
    children : ReactNode,
    setDarkMode : React.Dispatch<React.SetStateAction<boolean>>,
    darkMode : boolean
}

const Header : FC<HeaderProp> = ({image, children, setDarkMode, darkMode}) => {
    return (
        <header className="text-4xl flex items-center justify-between min-h-36 w-4/12 text-black dark:text-white">
            <div className="flex items-center">
            {children}
            <img src={image.src} alt={image.alt} className="ml-4" />
            <button className="text-white dark:text-black"></button>
            </div>
            <button className="text-black dark:text-white" 
            onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <MdDarkMode/> : <MdLightMode />}
            </button>
        </header>
    )
}

export default Header


{/* <MdLightMode /> */}
// MdDarkMode