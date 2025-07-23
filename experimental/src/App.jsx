import { useState } from "react"

export default function App() {
  return (
    <>
      <Button>
        <h1>Child 1</h1>
        <h2>Child 2</h2>
      </Button>
    </>
  )
}

function Button(props) {
  console.log(props)
  return (
    <>
      <button className="px-4 py-2 border border-blue-600 text-black bg-amber-200 font bold">click me</button>
    </>
  )
}
