import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoProfile from '../../images/user-avatar.svg'
import style from './profileMenu.module.css'

function ProfileMenu () {
    const [isDrop, setIsDrop] = useState(false)
    return(
        <div className={style.wrap}>
            <Link to='/'><img src={LogoProfile} alt="profile logo"/></Link>
            <button className={style.btn} onClick={()=> setIsDrop(!isDrop)}> 
               {isDrop ? '∧' : '∨'}
            </button>
            { 
                isDrop &&
                <div className={style.selectWrap}>
                <form className={style.select}>
                    <Link className={style.link} to='/'><option className={style.option} onClick={() => setIsDrop(false)} value="Profile">Profile</option></Link>
                    <Link className={style.link} to='/log-out'><option className={style.option} onClick={() => setIsDrop(false)} value="Log out">Log out</option></Link>
                </form>
                </div>
            } 
        </div>
    )
}

export default ProfileMenu
