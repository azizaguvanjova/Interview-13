import React, { useEffect, useState } from "react";

function App() {
  return <CustomProgram />;
}

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

const CustomProgram = () => {
const [program, setProgram] = useState([])
const [inputValue, setInputValue] = useState('')
const [result, setResult] = useState(null)
const [lastExec, setLastExec] = useState('')

const handleAddOperation = (operation) => {
  setProgram([...program,operation])
}
  
const handleInputChange = (e) => {
  setInputValue(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  const initialValue = parseFloat(inputValue)
  if(isNaN(initialValue)){
    alert("Lütfen geçerli bir başlangiç değeri girin")
    return
  }
const calculatedResult = exeCuteProgram(initialValue,program)
setResult(calculatedResult)
setInputValue('')
setLastExec("")


}

const handleClearProgram = ()  =>{
  setProgram([])
  setResult(null)
  setLastExec('')
}

const exeCuteProgram = (value,operations) => {
  return operations.reduce((acc,operation) => operation(acc),value)
}

return (
  <div className="flex flex-col items-center justify-center mt-36">
    <div className="mb-6 flex justify-center">
    <button onClick={() => handleAddOperation(half)} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 rounded mr-3 border border-black">Yarım</button>
    <button onClick={() => handleAddOperation(double)} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 rounded mr-3 border border-black">Iki katı</button>
    <button onClick={() => handleAddOperation(increment)} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 rounded mr-3 border border-black">Arttir</button>
    <button onClick={() => handleAddOperation(decrement)} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 rounded mr-3 border border-black">Azalt</button>
    <button onClick={handleClearProgram} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-3 rounded border border-black">Temizle</button>    
        </div>
    <h2 className="font-bold text-4xl">Fonksiyonum</h2>
  <ul className="mb-36">
    {program.map((operation,index) => (
      <li key={index}>
        {operation === half
        ? 'yarim'
      : operation === double
      ? 'iki katı'
    :operation === increment
    ? 'arttir'
  : 'azalt'}
      </li>
    ))}
  </ul>
  <form onSubmit={handleSubmit}>
    <input 
    className="border border-black bg-gray-200 rounded"
    type="number"
    value={inputValue}
    onChange={handleInputChange}
    required />
    <button className=" border border-black bg-gray-200 px-6 rounded hover:bg-gray-300" type="submit">Gönder</button>
  </form>
  
  {<div className="mt-4">
  <p className="text-lg">Son Yürütme:</p>
  {result !== null && <p className="text-lg ">{result} ? :Fonksiyonum: ? {result}</p>}
  </div>}
  </div>
)

};

export default App;
