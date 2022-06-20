import React, { useState } from 'react' 
import { Link, useParams } from 'react-router-dom'
import style from './taskDescription.module.css'

const TaskDescription = ({ tasks, setTasks }) => {
    const { taskId } = useParams()
    const curTask = tasks.find(task => task.id === taskId)

    const [addDescription, setAddDescription] = useState({
       description: curTask.description,
    })

    const editDescription = event => {
        setAddDescription({...addDescription, description: curTask.description = event.target.value})
        setTasks([...tasks])
    }
    
    return (
        <div className={style.page}>
            <div className={style.frame}>
            <h2 className={style.taskName}>{curTask.title}</h2>
                <textarea 
                    value={addDescription.description} 
                    onChange={editDescription}
                    placeholder='Enter task description...' 
                    className={style.discription}>
                </textarea>
            </div>
            <Link to='/'> <button title="Back to main page"className={style.btnClose}>&#10006;</button></Link>
        </div>
    )
}

export default TaskDescription
