import React from 'react'
import uniqid from 'uniqid'
import TaskList from '../taskList/taskList'
import style from './board.module.css'

const Board = ({ tasks, setTasks }) => {

    function filteredList(status) {
        const list = tasks.filter(task => task.status === status)
        return list
    }

    const addNewTask = (title) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description: '',
            status: 'backlog',
        }
        setTasks([...tasks, newTask])
    }

    return(
            <div className={style.board}>
               <TaskList addTask={addNewTask} list={filteredList('backlog')|| []} listName='Backlog'/>
               <TaskList tasks={tasks} setTasks={setTasks} selectList={filteredList('backlog') || []} list={filteredList('ready')|| []} listName='Ready'/>
               <TaskList tasks={tasks} setTasks={setTasks} selectList={filteredList('ready')|| []} list={filteredList('in progress')|| []} listName='In progress'/>
               <TaskList tasks={tasks} setTasks={setTasks} selectList={filteredList('in progress')|| []} list={filteredList('finish')|| []} listName='Finish'/>
            </div>
    )
} 

export default Board
