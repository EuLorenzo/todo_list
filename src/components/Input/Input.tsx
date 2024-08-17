import { InputHTMLAttributes } from "react"
import styles from "./Input.module.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}
export default function Input(props : InputProps){
    return(
        <input 
            type="text"
            className={styles.input} 
            placeholder="Adicione uma nova tarefa" 
            {...props}
        /> 
    )

}