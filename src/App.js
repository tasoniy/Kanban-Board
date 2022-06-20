import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Board from './components/board/board'
import TaskDescription from './components/taskDescription/taskDescription'
import LogOut from './components/logOut/logOut'
import NotFound from './components/notFound/notFound'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(window.localStorage.getItem('tasks')) || [])

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  return (
    <>
      <BrowserRouter>
        <Header/>
        <main className='main'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Board tasks={tasks} setTasks={setTasks}/>}/>
              <Route path='/task/:taskId' element={<TaskDescription tasks={tasks} setTasks={setTasks}/>}/>
              <Route path='/log-out' element={<LogOut/>}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </div>
        </main>
        <Footer tasks={tasks}/>
      </BrowserRouter>
    </>
  );
}

export default App
