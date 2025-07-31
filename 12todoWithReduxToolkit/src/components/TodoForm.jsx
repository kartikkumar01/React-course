import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, updateTodoInput, updateTodo, toggleEditMode } from "../features/todo/todoSlice"

function TodoForm() {
    const dispatch = useDispatch()
    const inputRef = useRef()

    //This state is coming from the Redux-Toolkit
    const input = useSelector(state => state.todo.todoInput)
    const setInput = (value) => dispatch(updateTodoInput(value))

    const currentBtnId = useSelector(state => state.todo.currentBtnId)
    const editMode = useSelector(state => state.todo.editMode)

    const buttonHandler = () => {
        if (editMode) {
            dispatch(updateTodo({ id: currentBtnId, task: input }))
            dispatch(toggleEditMode())
        } else {
            if (input) dispatch(addTodo(input))
        }
        setInput('')
    }

    useEffect(() => {
        if (inputRef) {
            inputRef.current.focus()
        }
    }, [editMode])
    
    return (
        <form onSubmit={(e) => e.preventDefault()} className="my-4 w-full flex justify-center items-center flex-col gap-2 sm:flex-row">
            <input
                ref={inputRef}
                type="text"
                className={`bg-gray-800 sm:w-80 rounded border border-gray-700 ${(editMode) ? 'focus:border-red-500 focus:ring-red-900' : 'focus:border-indigo-500 focus:ring-indigo-900'} focus:ring-2  outline-none text-gray-100 py-2 px-3 transition-colors duration-200 ease-in-out`}
                placeholder="Enter a Todo..."
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                onClick={buttonHandler}
                className={` cursor-pointer text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
            >
                {(editMode ? 'Update' : 'Add')}
            </button>
        </form>

    )
}

export { TodoForm }