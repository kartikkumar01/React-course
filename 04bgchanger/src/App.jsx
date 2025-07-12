import React, {useState} from 'react'
console.log(React, useState)
function App() {
  const [bg, setBg] = useState('black')
  return (
    <div className='border h-[100vh]' style={{backgroundColor : bg}}>
    
    <button onClick={() => setBg('red')} className="cursor-pointer relative z-0 rounded bg-red-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-red-700 after:transition-[all_0.3s_ease]  hover:after:w-full ">
        RED
  </button>
    <button onClick={() => setBg('green')} className="cursor-pointer relative z-0 rounded bg-green-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-green-700 after:transition-[all_0.3s_ease]  hover:after:w-full ">
        GREEN
  </button>
    <button onClick={() => setBg('yellow')} className="cursor-pointer relative z-0 rounded bg-yellow-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-yellow-700 after:transition-[all_0.3s_ease]  hover:after:w-full ">
        YELLOW
  </button>
      
    </div>
  )
}

export default App
