// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
//fontawesome

import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, setButtonId, toggleCompleted, toggleEditMode, updateTodoInput } from "../features/todo/todoSlice"

function TodoItem({ todo }) {

  const dispatch = useDispatch()

  const completed = todo.completed
  const setCompleted = () => dispatch(toggleCompleted(todo.id))

  const currentBtnId = useSelector(state => state.todo.currentBtnId)
  const editMode = useSelector(state => state.todo.editMode)
  const setInput = (value) => dispatch(updateTodoInput(value))

  const deleteHandler = () => dispatch(deleteTodo(todo.id))

  const editHandler = () => {
    if (editMode) {
      setInput('')
    } else {
      setInput(todo.task)
    }
    dispatch(toggleEditMode())
    dispatch(setButtonId(todo.id))
  }

  return (
    <>
      <li className={`w-[95%] mx-auto my-1 sm:my-3 sm:py-5 sm:px-10 max-w-[686px] flex flex-col sm:flex-row gap-1 py-1 ${(completed ? 'line-through bg-yellow-100 text-black' : 'bg-gray-600')} transition-all duration-100 rounded list-none items-center ${(editMode && todo.id === currentBtnId) ? 'border-red-700 border-2' : 'border-indigo-500 border'}`}>
        <div onClick={setCompleted} className="cursor-pointer w-full px-1 flex items-center gap-2">
          <input type="checkbox" readOnly checked={completed} className="cursor-pointer peer appearance-none w-4 h-4 bg-white border-2 border-gray-300 rounded-md transition-all duration-300 checked:bg-blue-600 checked:border-blue-600 checked:ring-4 checked:ring-blue-300 shadow-sm hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />

          <span className="sm:font-bold sm:text-xl ">{todo.task}</span>
        </div>
        <div className='flex'>
          <button
            disabled={completed}
            onClick={editHandler}
            className={`${completed ? 'bg-gray-400 cursor-not-allowed opacity-70' : 'bg-green-500 hover:bg-green-600 cursor-pointer '} mx-2 cursor-pointer text-white  border-0 px-2 focus:outline-none  rounded sm:text-lg`}
          >
            {((editMode && todo.id === currentBtnId) ? 'Cancel' : <FontAwesomeIcon icon="fa-solid fa-pencil" />)}
          </button>
          <button
            onClick={deleteHandler}
            className={`hover:scale-115 transition-all mx-2 cursor-pointer text-white bg-red-500 border-0 px-1 py-0 focus:outline-none hover:bg-red-600 rounded-full`}
          >
            <FontAwesomeIcon icon={["fas", "trash-alt"]} />
          </button>
        </div>
      </li>
    </>
  )
}

export { TodoItem }