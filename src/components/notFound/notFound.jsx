import React from 'react'
import { Link } from 'react-router-dom'
import style from './notFound.module.css'

function NotFound() {
    return(
        <>
            <div className={style.page}>
                <h2 className={style.text}>Page not found</h2>
                <Link to='/'> <button title="Back to main page"className={style.btnClose}>&#10006;</button></Link>
            </div>
        </>
    )
}

export default NotFound