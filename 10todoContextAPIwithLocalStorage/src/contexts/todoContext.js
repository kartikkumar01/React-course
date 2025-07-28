import { createContext, useContext } from "react";

const todoContext = createContext({
    // we do not define function definition here, it is just fallbacks if component outside or provider try to access context
    todos : [
        {
            id : 1,
            task : 'go to gym',
            completed : false
        }
    ],
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id, task) => {},
    toggleTodo : (id) => {}
})

export const TodoContextProvider = todoContext.Provider

export const useTodoContext = () => useContext(todoContext)