import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos : JSON.parse(localStorage.getItem('todos')) || [],
        todoInput : '',
        editMode : false,
        currentBtnId : ''
    },
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                task : action.payload,
                completed : false
            }
            state.todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id) ? {...todo, task : action.payload.task} : todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        toggleCompleted : (state, action) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload) ? {...todo, completed : !todo.completed} : todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateTodoInput : (state, action) => {state.todoInput =  action.payload},
        toggleEditMode : (state, action) => {state.editMode = !state.editMode},
        setButtonId : (state, action) => {state.currentBtnId = action.payload}
    }
})

export const todoReducer = todoSlice.reducer
export const {addTodo, deleteTodo, updateTodo, toggleCompleted,  updateTodoInput, toggleEditMode, setButtonId} = todoSlice.actions