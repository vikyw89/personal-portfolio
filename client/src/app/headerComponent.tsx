"use client"
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { useState } from 'react';

export const HeaderComponent = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const menuClickHandler = (e: any) => {
        setMenuIsOpen(p => !p)
    }

    const closeMenu = (e:any) => {
        e.stopPropagation()
        if (e.target.id === 'menuPopUp') {
            setMenuIsOpen(p=>!p)
        }
    }
    return (
        <div className="flex">
            <button className='btn btn-square bg-neutral' onClick={menuClickHandler}>
                {menuIsOpen &&
                    <MenuOpenIcon />
                }
                {!menuIsOpen &&
                    <MenuIcon />
                }
            </button>
            {menuIsOpen &&
                <div id="menuPopUp" className='z-50 fixed top-0 left-0 bottom-0 right-0 flex' onClick={closeMenu}>
                    <div className='flex flex-col bg-opacity-50 p-10 font-bold bg-neutral-focus backdrop-blur-md'>
                        <ul className='flex flex-col gap-5'>
                            <li><a className='hover:bg-white'>Download Resume</a></li>
                            <li><a className='hover:bg-white'>Works</a></li>
                            <li><a className='hover:bg-white'>Contact Me</a></li>
                        </ul>
                    </div>
                </div>
            }
        </div >
    )
}