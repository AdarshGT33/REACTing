import { createContext, useContext } from "react";

export const TodoContext = createContext(
    todos = [
        {
            id: 1,
            title: "Narayan",
            status: false
        },
        addTodo = (title) => {},
        updateTodo = (id, title) => {},
        removeTodo = (id) => {},
        toggleTodo = (id) => {}
    ]
)

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}