import { useState } from "react"

const dg = ['zero', ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'], 'Handred', '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion']

const con3Num = (num) => {

  let wNum = ""
  let [a, b, c] = num.split('').map(n => parseInt(n))
  if (a != 0) {
    wNum += dg[1][a - 1] + " " + dg[4]
  }
  if (b != 0) {
    if (a != 0) wNum += " and "
    wNum += b === 1 ? " " + dg[2][c] : " " + dg[3][b - 2]
  }
  if (c != 0 && b != 1) {
    wNum += " " + dg[1][c - 1]
  }
  return wNum
}

const toWords = (num = 0) => {
  // if (isNaN(num)) {
  //     return Error('"' + num + '" is not a Number')
  // }
  let signe = ""
  if (num === 0) {
    return dg[0]
  }
  if (num < 0) {
    num *= -1
    signe = 'minus '
  }
  if (num > Number.MAX_SAFE_INTEGER) return Error('Number is too big')
  num = num.toString()
  const d = num.indexOf('.')
  if (d != -1) {
    pointNum = num.slice(d + 1,)
    num = num.slice(0, d)
  }

  let numOfZeros = 3 - num.length % 3
  if (numOfZeros === 3) {
    numOfZeros = 0
  }
  num = "0".repeat(numOfZeros) + num
  const nTab = num.match(/.{3}/g)
  return signe + nTab.reverse().map((p, i) => {
    let converted = con3Num(p)
    return converted === "" ? "" : converted + ' ' + dg[5 + i]
  })
    .reverse().filter(e => e != "").join(" and ").replace(/\s+/g, ' ').trim()

}



function E1() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {toWords(counter * 1001570)}
      </h1>
      <button onClick={() => setCounter(i => i + 1)}>Click</button>
    </>
  )
}

export default E1
