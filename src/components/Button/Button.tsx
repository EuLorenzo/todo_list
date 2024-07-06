import { PlusCircle } from "@phosphor-icons/react"
import styled from "./Button.module.css"

export default function Button(){
    return(
        <button className={styled.button}>Criar <PlusCircle size={20}/></button>
    )
}