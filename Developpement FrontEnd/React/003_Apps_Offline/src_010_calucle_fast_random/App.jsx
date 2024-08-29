import React, { useState, useRef, useEffect } from 'react'

export default function App() {
  const input = useRef()
  const [number, setnumber] = useState({ num1: null, num2: null, total: null, win: null, rank: 0, gameover: false })
  const [result, setResult] = useState(0)
  const [r, setR] = useState(0)



  useEffect(() => {
    let n1 = Math.floor(Math.random() * 10)
    let n2 = Math.floor(Math.random() * 10)
    let t = n1 + n2
    setnumber({ ...number, num1: n1, num2: n2, total: t })
  }, [r])


  setTimeout(() => checkresult(), 2000)

  function checkresult() {
    console.log("gg")

    if (result !== 0) {
      console.log(input.current.value, number.total)

      if (result == number.total) {
        setnumber({ ...number, win: "nice", rank: number.rank + 1 })
        setResult(0)
      }
      else {
        setnumber({ ...number, win: "bad", gameover: true })
      }
    }
  }

  return (
    <div>
      {number.gameover != true ? <div> <h1>{number.num1} + {number.num2}</h1> <input ref={input} type="number" id='result' value={result} onChange={e => setResult(e.target.value)} />
        <button onClick={checkresult}> done</button> <h1>{number.win}</h1> </div> : ''}

      <h1>rank :{number.rank}</h1>

    </div>
  )
}
// }

