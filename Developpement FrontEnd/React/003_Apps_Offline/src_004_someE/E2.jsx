import { useState } from "react"

function E2() {
  const [color, setColor] = useState("#000")
  return (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="#000" selected>Black</option>
        <option value="#f00">Red</option>
        <option value="#0f0">Green</option>
        <option value="#00f">Blue</option>
      </select>
    </>
  )
}

export default E2
