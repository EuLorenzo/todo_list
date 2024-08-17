import styled from'./App.module.css'
import "./global.css"
import todo_logo from "./assets/todo_logo.svg"
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import { ChangeEvent, FormEvent, useState } from 'react'
import Task from './components/Task/Task'

interface TaskDto{
  content: string,
  isFinished : boolean
}

export default function App() {

  const [tasks, setTasks] = useState<TaskDto[]>([])

  const [taskName, setTaskName] = useState("")

  function handleNewTask(e : FormEvent){
    e.preventDefault()

    if(!taskName){
      alert("Bota o nome da tarefa ae")
      return
    }

    const newTask : TaskDto = {
      content: taskName,
      isFinished: false,
    }

    setTasks((state) => [...state ,newTask])
    setTaskName("")
  }

  function handleTaskName(e : ChangeEvent<HTMLInputElement>){
    const taskName = e.target.value
    setTaskName(taskName)
  }

  function handleTaskDelete(key : number){
    const newTasks = tasks.filter((valor, indice) => indice != key)
    setTasks(newTasks)
  }

  function handleTaskFinish(key: number) {
    const updatedTasks = [...tasks];
    const finishedTask = {
      ...updatedTasks[key],
      isFinished: !updatedTasks[key].isFinished,
    };

    updatedTasks[key] = finishedTask;
    setTasks(updatedTasks);
  }

  const tasksLenght = tasks.length
  const isInputNull = taskName === "" ? "" : taskName

  return (
    <>
      <header className={styled.header}>
        <img src={todo_logo} alt="Todo logo" />
      </header>

      <main>
        <form onSubmit={handleNewTask}>
          <Input value={isInputNull} onChange={handleTaskName}/>
          <Button/>
        </form>

        <div className={styled.tasksMenu}>
          <div className={styled.tasksMenuHeader}>
            <p className={styled.createdTasks}>Tarefas criadas <span>{tasksLenght}</span></p>
            <p className={styled.finishedTasks}>Concluídas <span>{0} de {tasksLenght}</span></p>
          </div>

          {tasks.map((task, key) => {
            return (
              <Task 
                key={key} 
                index={key}
                content={task.content}
                isFinished={task.isFinished} 
                onDelete={() => handleTaskDelete(key)} 
                onFinish={() => handleTaskFinish(key)}
              />)
          } )}

        </div>
      </main>
    
    </>
  )
}

