import styled from'./App.module.css'
import "./global.css"
import todo_logo from "./assets/todo_logo.svg"
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import React, { FormEvent } from 'react'

interface Task{
  
}

export default function App() {

  function handleNewTask(event : any){
    event.preventDefault()


  }

  return (
    <>
      <header className={styled.header}>
        <img src={todo_logo} alt="Todo logo" />
      </header>

      <main>
        <form onSubmit={handleNewTask}>
          <Input/>
          <Button/>
        </form>

        <div className={styled.tasksMenu}>
          <div className={styled.tasksMenuHeader}>
            <p>Tarefas criadas {}</p>
            <p>Concluídas</p>
          </div>

        </div>


      </main>
      
    </>
  )
}

