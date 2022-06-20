import React, { useState } from 'react' 
import style from './addTask.module.css'

const AddTask = ({ formSubmit }) => {
    const [error, setError] = useState(false)
    const [value, setValue] = useState({
        title:'',
    })

    const createTask = event => {
        event.preventDefault()
        if(value.title) formSubmit(value.title)
        if(!value.title) setError(true)
    }
    
    const createTitle = event => {
        setValue({...value, title: event.target.value})
        setError(false)
    }

    return(
        <form onSubmit={createTask}>
            <div className={style.wrap}>
                <input value={value.title} onChange={createTitle} className={style.addField} type="text" placeholder='Enter title...'/>
            </div>
            {error ? <p className={style.error}>This field is required...</p> : ''}
            <button className={style.btnSubmit} type="submit">Submit</button>
        </form>
    )
} 

export default AddTask