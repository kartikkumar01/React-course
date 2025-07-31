import { useSelector } from "react-redux"
import { TodoForm } from "./components/TodoForm"
import { TodoItem } from "./components/TodoItem"

function App() {
  const todos = useSelector(state => state.todo.todos)
  return (
    <>
    <h1 className="text-center text-3xl font-semibold mt-4">TODO APP</h1>
    <TodoForm />
    {todos.map((todo) => (<TodoItem key={todo.id} todo={todo}/>))}
    </>
  )
}

export default App