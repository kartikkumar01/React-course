import { useDispatch, useSelector } from "react-redux"
import { decreaseCount, increaseCount } from "./features/counter/counterSlice"

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const incrementHandler = () => dispatch(increaseCount())
  const decrementHandler = () => dispatch(decreaseCount())
  return (
    <>
    <div className="text-5xl">{count}</div>
    <Button text='Increment' onClick={incrementHandler}/>
    <Button text='Decrement' onClick={decrementHandler}/>
    </>
  )
}

function Button({text, onClick}) {
  return (
    <button className="cursor-pointer relative block group mx-auto my-2" onClick={onClick}>
      <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
      <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-2 ">
          <p className="text-xl font-outerSans font-medium">{text}</p>
        </div>
      </div>
    </button>
  )
}

export default App