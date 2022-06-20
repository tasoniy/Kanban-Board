import React from 'react'
import { Link } from 'react-router-dom'
import style from './task.module.css'

const Task = ({ task }) => {
    return(
        <Link className={style.task}
            key={task.id} 
            to={`/task/${task.id}`}>
            
                <li className={style.item}>{task.title}</li>
            
        </Link>
    )
}

export default Task 

