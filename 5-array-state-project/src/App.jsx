import { useState } from 'react'

const INITIAL_VALUE = ["A", "B", "C"]

function App() {
  const [array, setArray] = useState(INITIAL_VALUE)

  function removeFirstElement(){
    setArray(currentArray => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificLetter(letter){
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter)
    })
  }

  function addLetterToStart(letter){
    setArray(currentArray => {
      return [letter, ...currentArray]
    })
  }

  function addLetterToEnd(letter){
    setArray(currentArray => {
      return [...currentArray, letter]
    })
  }

  function clear(){
    setArray([])
  }

  function reset(){
    setArray(INITIAL_VALUE)
  }

  function updateAtoH(letter){
    setArray(currentArray => {
      return currentArray.map(element => {
        if (element === "A") return "H"
        return element
      })
    })
  }

  return(
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove All B&apos;s</button>
      <br />
      <button onClick={() => addLetterToStart("B")}>Add to Start</button>
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add to End</button>
      <br />

      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={() => updateAtoH("H")}>Update A to H</button>
      <br />
      {array.join(", ")}
    </div>
  )
}

export default App
