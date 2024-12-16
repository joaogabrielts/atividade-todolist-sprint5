import { useContext } from "react"
import { TodoContext } from "../../../providers/TodoContext"

export const FruitCard = ({fruit}) => {
    const {removeFruit} = useContext(TodoContext)
    return(
        <li>
            <h3>{fruit.text}</h3>
            <span>{Number(fruit.value).toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            <button onClick={() => removeFruit(fruit.id)}>Remover</button>
        </li>
    )
}