import { useEffect, useState } from "react"
import img from "./assets/avatars/1.jpeg"
import axios from "axios"


function App() {
  const [result, setResult] = useState({ fact: "Cats can be taught to walk on a leash, but a lot of time and patience is required to teach them. The younger the cat is, the easier it will be for them to learn." })

  useEffect(() => {
    const timeOut = setTimeout(() => {
      axios.get('https://catfact.ninja/fact')
        .then(res => res.data)
        .then(catFact => setResult(catFact))
    }, 5000)
    return () => clearTimeout(timeOut)
  }, [result])

  return (
    <div>
      <img src={img} alt="" />
      <h1>{result.fact}</h1>
    </div>
  )
}

export default App
