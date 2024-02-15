import { useState } from "react"
import Result from "./Result"
import SearchBar from "./SearchBar"



function App() {
  const [result, setResult] = useState(data)
  const filterResult = (e) => {
    e.preventDefault()
    // let from = Object.fromEntries(new FormData(e.currentTarget))

    let from = e.target
    // console.log(from.search.value)
    setResult(data.filter(e => e.type === from.search.value))
  }

  return (
    <div className="flex flex-col gap-2">
      <SearchBar handleSearch={filterResult} />
      <Result result={result} />
    </div>
  )
}


let data = [
  { name: "tomato", type: "legum" },
  { name: "tomato", type: "legum" },
  { name: "tomato", type: "legum" },
  { name: "tomato", type: "legum" },
  { name: "tomato", type: "legum" },
  { name: "tomato", type: "legum" },
  { name: "tomato", type: "legum" },
  { name: "appele", type: "fruit" },
  { name: "appele", type: "fruit" },
  { name: "appele", type: "fruit" },
  { name: "appele", type: "fruit" },
  { name: "appele", type: "fruit" }
]

export default App
