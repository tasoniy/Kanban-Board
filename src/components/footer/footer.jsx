import React from 'react'
import '../../App.css'
import style from './footer.module.css'

function Footer({ tasks }) {
    const activeTasks =  tasks.filter(task => task.status === 'ready')
    const finishTasks =  tasks.filter(task => task.status === 'finish')

    return(
        <footer className={style.footer}>
            <div className='container'>
                <div>
                    <p className={style.text}>Active tasks:{activeTasks.length} </p>
                    <p className={style.text}>Finished tasks: {finishTasks.length} </p>
                </div>
                <div>
                    <p className={style.text}>Kanban board by Anastasiya, 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer