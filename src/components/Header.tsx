import {FC,  type ReactNode } from "react"

type HeaderProp = {
    image : {
        src : string,
        alt : string
    },
    children : ReactNode
}

const Header : FC<HeaderProp> = ({image, children}) => {
    return (
        <header className="text-4xl flex items-center justify-center min-h-64">
            {children}
            <img src={image.src} alt={image.alt} className="ml-4" />
        </header>
    )
}

export default Header