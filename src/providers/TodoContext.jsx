import { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
    const [fruitList, setFruitList] = useState([])

    const addFruit = (name,price) => {
        setFruitList([...fruitList,{text:name,value:price, id:crypto.randomUUID()}])
        console.log(fruitList);
        
    }

    const removeFruit = (todoId) => {
        const newTodoList = fruitList.filter(todo => todo.id !== todoId)
        setFruitList(newTodoList)
    }
    return(
       <TodoContext.Provider value={{fruitList,addFruit,removeFruit}}>
        {children}
       </TodoContext.Provider>
    )
};
