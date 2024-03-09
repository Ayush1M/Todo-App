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
        <header>
            {children}
            <img src={image.src} alt={image.alt} />
        </header>
    )
}

export default Header