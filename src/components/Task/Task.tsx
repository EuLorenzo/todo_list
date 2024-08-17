import { Trash } from "@phosphor-icons/react"
import styled from "./Task.module.css"

interface TaskProps{
    index : number
    onFinish: () => void
    onDelete: () => void
    content : string
    isFinished : boolean
}

export default function Task({index, content, isFinished,onDelete, onFinish} : TaskProps){

    const isFinishedStyle = isFinished ? styled.taskTextUndelined : styled.taskText
    const inputId = `isFinished-checkbox-${index}`
    return(
        <div className={styled.task}>
            <input 
                id={inputId} 
                onChange={onFinish} 
                type="checkbox" 
                className={styled.checkbox} 
            />
            <label htmlFor={inputId} className={isFinishedStyle}>{content}</label>
            <div className={styled.trashContainer}>
                <Trash onClick={onDelete} className={styled.trash} cursor="pointer" size={18}/>
            </div>
        </div>
    )


}