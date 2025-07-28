import { useState } from "react";
import { useTodoContext } from "../contexts/todoContext";

function TodoForm() {
    const [inputTask, setInputTask] = useState('')
    const {addTodo} = useTodoContext()
    function formSubmitHandler(e){
        e.preventDefault()
        if(inputTask){
            addTodo({
                id : Date.now(),
                task : inputTask,
                completed : false
            })
            setInputTask('')
        }
    }
    return (
        <form onSubmit={formSubmitHandler} className="flex">
            <input
                type="text"
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export {TodoForm}