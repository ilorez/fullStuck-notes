import { useState } from "react"
import CardInfo from './CardInfo'
import Form from './Form'

function App() {
  // store cards info
  const [cards, setCards] = useState([])

  // on user submit data
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    console.log(new FormData(e.currentTarget))
    let data = Object.fromEntries(new FormData(e.currentTarget))
    console.log(data)
    let favSports = []
    for (const key in data) {
      if (key.startsWith('fav')) {
        favSports = [...favSports, data[key]]
        delete data[key]
      }
    }
    data['favSports'] = favSports
    setCards([...cards, data])
  }



  return (
    <div className="flex flex-col items-center justify-center">
      {/* form  */}

      <Form handleSubmit={handleSubmit} />

      {/* cards info*/}
      <div className="grid grid-cols-2 gap-2 mt-4 aspect-[3/2] flex-1 ">
        {
          cards.map((e, i) => (
            <div key={i} className="p-3 bg-white shadow-lg min-w-[200px] max-w-[300px]">
              <CardInfo name={e.name} sex={e.sex} country={e.country} favSports={e.favSports} about={e.about} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
