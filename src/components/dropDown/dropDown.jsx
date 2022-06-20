import React from 'react'
import style from './dropDown.module.css'
const DropDown = ({ selectList, handleSelect }) => {

    return(
        <div className={style.wrap}>
            <select className={style.select} onChange={handleSelect}>
                <option className={style.option}></option>
                {
                    selectList.map(task => {
                        return <option className={style.option} key={task.id}>{task.title}</option>
                    })
                }
            </select>
        </div>
    )
}

export default DropDown
