import { useEffect, useState } from "react"
import { TodoContextProvider } from "./contexts/todoContext"
import { TodoForm, TodoItem } from "./components"
function App() {

  const [todos, setTodos] = useState([])
  console.log(todos)
  const addTodo = (todo) => setTodos((prevTodos) => [...prevTodos, todo])
  const deleteTodo = (id) => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  const updateTodo = (id, task) => setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id) ? { ...todo, task } : todo))
  const toggleTodo = (id) => setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id) ? { ...todo, completed: !todo.completed } : todo))

  useEffect(() => {
    console.log('get from local storage')
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    if(localTodos && localTodos.length > 0) setTodos(localTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])



  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App