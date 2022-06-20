import React from 'react'
import style from './header.module.css'
import ProfileMenu from '../profileMenu/profileMenu'
import '../../App.css'

function Header() {
    return(
        <header className={style.header}>
            <div className='container'>
                <h1 className={style.title}>Awesome Kanban Board</h1>
                <ProfileMenu/>
            </div>
        </header>
    )
}

export default Header