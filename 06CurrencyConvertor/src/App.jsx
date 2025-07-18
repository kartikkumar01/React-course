import { useState, useRef } from "react"
import {InputBox} from "./components"
import {useCurrencyInfo} from "./hooks"

function App() {
  {
    //THIS CODE IS FOR DEBUGGING PURPOSES
    let isFirstRender = useRef(true)
    if (isFirstRender.current) {
      isFirstRender.current = false
      console.log("-----------First Render--------------")
    } else {
      console.log("------------Re-Render-------------")
    }
    //THIS CODE IS FOR DEBUGGING PURPOSES
  }

  //These are my states
  let [amount1, setAmount1] = useState(1)
  let [currency1, setCurrency1] = useState('usd')
  let [amount2, setAmount2] = useState('')
  let [currency2, setCurrency2] = useState('inr')

  //I am using my customHook here which returns a data state
  let currencies = useCurrencyInfo(currency1)

  return (
    <>
      <div className=" w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
        <div className="w-full">
          <div className="w-full max-w-md ml-auto mr-15 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={e => e.preventDefault()}>
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount1}
                  setAmount={setAmount1}
                  currency={currency1}
                  setCurrency={setCurrency1}
                  currencyList={Object.keys(currencies)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={() => {
                    setCurrency1(currency2)
                    setCurrency2(currency1)
                  }}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  amountDisable={true}
                  label="To"
                  amount={amount2}
                  setAmount={setAmount2}
                  currency={currency2}
                  setCurrency={setCurrency2}
                  currencyList={Object.keys(currencies)}
                />
              </div>
              <button
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={() => setAmount2(amount1 * currencies[currency2])}
              >
                Convert {currency1.toUpperCase()} to {currency2.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default App