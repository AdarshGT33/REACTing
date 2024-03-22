import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, title: "Narayan"}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id : nanoid(),
                title : action.payload // "adding" id and title: hence action
            }
            state.todos.push(todo) // updating state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) // over-writing the current state of todo with the required state of todo according to the action required
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions // exporting individual reducers to use them in components individually

export default todoSlice.reducer // exporting the list of all reducers to enhance the store awareness about reducers as store do not allow state updation from any other source, only from slice.