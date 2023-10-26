function Product({ title, price, imgSrc }) {
  return (
    <div>
      <div>
        <img src={imgSrc} className="w-28" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <button className="p-2 rounded-md bg-gray-300">Ajoute o sala</button>
      </div>
    </div>
  )
}

function Products(props) {
  return (
    <div className="flex gap-4 h-fit">
      {
        props.products.map(el => (
          <div key={el.id} className="h-fall">
            <Product title={el.title} imgSrc={el.imgSrc} price={el.price} />
          </div>
        ))
      }
    </div>
  )
}



const products = [
  {
    id: 1,
    title: "im title",
    price: 1654,
    imgSrc: "/src/assets/avatars/_ (1).jpeg",
  },
  {
    id: 2,
    title: "im title",
    price: 1654,
    imgSrc: "/src/assets/avatars/_ (2).jpeg",
  },
  {
    id: 3,
    title: "im title",
    price: 1654,
    imgSrc: "/src/assets/avatars/_.jpeg",
  },
  {
    id: 3,
    title: "im title",
    price: 1654,
    imgSrc: "/src/assets/avatars/_ (3).jpeg",
  }
]




function App() {
  return (
    <Products products={products} />
  )
}

export default App
