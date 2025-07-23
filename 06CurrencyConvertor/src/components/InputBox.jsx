import { useId } from "react";
function InputBox({
    //props
    label,
    amount = 1,
    setAmount = () => { },
    currency = "usd",
    setCurrency = () => { },
    currencyList = [],
    amountDisable = false
}) {
    // We are using this id for binding label to inuput for better accessibility
    let id = useId()
    return (
        <div className="bg-white p-3 rounded-lg text-sm flex ">
            <div className="w-1/2">
                <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
                <input
                    id={id}
                    value={amount}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    {currencyList.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                </select>
            </div>
        </div>
    );
}

export { InputBox }