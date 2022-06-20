import React, { useState } from 'react'
import Task from '../task/task'
import AddTask from '../addTask/addTask'
import DropDown from '../dropDown/dropDown'
import style from './taskList.module.css'

const TaskList = ({ addTask, listName, list, tasks, setTasks, selectList }) => {
    const [isAddClicked, setIsAddClicked] = useState(false)
    const [updatedList, setUpdatedList] = useState(list || [])

    const formSubmit = (title) => {
        addTask(title)
        setIsAddClicked(false)
    }

    const handleSelect = (event) => {
        let  newStatus
        switch (listName) {
            case 'Ready':
                newStatus = 'ready'
                break;
            case 'In progress':
                newStatus = 'in progress'
                break;
            case 'Finish':
                newStatus = 'finish'
                break;
            default:
                newStatus = 'backlog'
                break;
        }
        const selectedTask = selectList.find(task => task.title === event.target.value)
        selectedTask.status = newStatus
        setUpdatedList([...updatedList, selectedTask])
        setIsAddClicked(!isAddClicked)
        setTasks([...tasks])
    }

    return (
        <div className={style.card}>
            <div className={style.wrap}>
                <h2 className={style.subtitle}>{listName}</h2>
                {
                    list.length ? 
                        <ul className={style.list}>
                            { list.map(task => <Task task={task} key={task.id}/>) }
                    
                        </ul> :
                        <p>Here no tasks yet...</p>
                }
                <button
                    disabled={listName !== 'Backlog' && selectList.length === 0 }
                    onClick={() => setIsAddClicked(!isAddClicked)}
                    className={isAddClicked ? style.hidden : style.addBtn}> 
                    &#10010; Add new task
                </button>
    
                { isAddClicked && listName === 'Backlog' && <AddTask formSubmit={formSubmit}/>  }

                { isAddClicked && listName !== 'Backlog' && <DropDown handleSelect={handleSelect} selectList={selectList}/> }
            </div>
        </div>
    )
}

export default TaskList