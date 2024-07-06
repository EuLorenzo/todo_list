import styles from "./Input.module.css"

export default function Input(){
    return(
        <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
    )

}