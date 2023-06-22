"use client"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { useState } from 'react';

const themeOptions = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
const themeQty = themeOptions.length

export const HeaderComponent = () => {
    const [themeIndex, setThemeIndex] = useState(9)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const menuClickHandler = (e: any) => {
        setMenuIsOpen(p => !p)
    }

    const closeMenu = (e: any) => {
        e.stopPropagation()
        if (e.target.id === 'menuPopUp') {
            setMenuIsOpen(p => !p)
        }
    }

    const toggleTheme = () => {
        const htmlNode = document.querySelector('html')
        setThemeIndex(p => {
            const newIndex = (p+1) % themeQty
            htmlNode?.setAttribute('data-theme', themeOptions[newIndex])
            return newIndex
        })
    }
    return (
        <div>
            <div className="flex fixed top-0 w-full bg-base-300 bg-opacity-50 backdrop-blur-sm z-10 shadow-2xl">
                <button className='btn btn-square bg-inherit' onClick={menuClickHandler}>
                    {menuIsOpen &&
                        <MenuOpenIcon />
                    }
                    {!menuIsOpen &&
                        <MenuIcon />
                    }
                </button>
            </div>
            {menuIsOpen &&
                <div id="menuPopUp" className='z-50 fixed top-0 left-0 bottom-0 right-0 flex' onClick={closeMenu}>
                    <div className='flex flex-col bg-opacity-50 p-10 font-bold bg-neutral-focus backdrop-blur-md shadow-2xl'>
                        <ul className='flex flex-col gap-5'>
                            <li><a>Download Resume</a></li>
                            <li><a>Works</a></li>
                            <li><a>Contact Me</a></li>
                            <li><a onClick={toggleTheme}>Theme Switcher</a><p>{themeOptions[themeIndex]}</p></li>
                        </ul>
                    </div>
                </div>
            }
            <div>
                <button className='btn btn-square bg-neutral' onClick={menuClickHandler}>
                    {menuIsOpen &&
                        <MenuOpenIcon />
                    }
                    {!menuIsOpen &&
                        <MenuIcon />
                    }
                </button>
            </div>
        </div>
    )
}