import React from "react"
import { useEffect, useState } from "react"
import CardBlog from "./CardBlog"
import FormCommantair from "./FormCommantair"


function App() {
  const [blogs, setBlogs] = useState(data)
  const [test, setTest] = useState(false)
  const addComment = (e) => {
    e.preventDefault()
    let formFields = Object.fromEntries(new FormData(e.currentTarget))
    console.log(formFields)
    blogs[formFields.id].comments.push(formFields)

    setBlogs(blogs)
    setTest(!test)
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div key={"blogs"} className="w-fit flex flex-col ">
        {
          blogs.map((b) => (
            <CardBlog key={b.id} blog={b} handleSubmit={addComment} />

          ))
        }

      </div>
    </div>
  )
}

const data = [
  {
    id: 0,
    title: "The cats is the pretty animals in the world",
    author: "Ilorez",
    img: "/src/assets/avatars/2.jpeg",
    comments: [
      {
        name: "zobair",
        say: "yeah of corse <3"
      },
      {
        name: "ilorez",
        say: "yeah"
      }
    ]
  },
  {
    id: 1,
    title: "Anotehr title",
    author: "Another person",
    img: "/src/assets/avatars/1.jpeg",
    comments: [
      {
        name: "Simo",
        say: "lorem ipsum"
      },
      {
        name: "lorem",
        say: "lorem ipsum dolor"
      }
    ]
  }

]
export default App
