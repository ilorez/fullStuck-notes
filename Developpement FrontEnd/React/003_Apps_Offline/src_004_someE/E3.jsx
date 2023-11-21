import { useState } from "react"
function E3() {
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    setMessage('')
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.currentTarget))
    console.log(data)
    if (data.nom.length < 3) {
      setMessage(prev => prev + "name should be > 3")
    }
    if (!/[a-zA-Z0-9]*@gmail.com/.test(data.email)) {
      setMessage(prev => prev + "\n Email inccorect")
    }
    if (data.password.length < 8) {
      setMessage(prev => prev + "\npassword should be > 8")
    }
  }

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      {/* nom  */}
      <div>
        <label htmlFor="nom">
          Nom: <input type="text" name="nom" />
        </label>
      </div>
      {/* email  */}
      <div>
        <label htmlFor="email">
          Email: <input type="email" name="email" />
        </label>
      </div>
      {/* password */}
      <div>
        <label htmlFor="password">
          Password: <input type="password" name="password" />
        </label>
      </div>
      <div style={{ color: "red" }}>
        {message}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default E3
