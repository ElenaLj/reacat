
import './App.css'

const cats: Cat = [
  {
    id: 0,
    name: "Merlino",
    gender: "M",
    age: 2,
    colour: "white and black",
    desc: "lorem ipsum Merlino",
    image: "https://cdn2.thecatapi.com/images/4os.jpg"
  },
  {
    id: 1,
    name: "Milly",
    gender: "F",
    age: 2,
    colour: "black and white",
    desc: "lorem ipsum Milly",
    image: "https://cdn2.thecatapi.com/images/7cn.jpg"
  },
]

type Cat = {
  id: number,
  name: string,
  gender: "M" | "F";
  age: number,
  colour: string,
  desc: string,
  image: string
}[]

// const catName = cats.map((cat) => <p>{cat.name}</p>);
// const catAge = cats.map((cat) => <p>{cat.age}</p>)
// const catDesc = cats.map((cat) => <p>{cat.desc}</p>);


function App() {

  return (
    <>
      <Card></Card>
    </>
  )
}

function Card() {
  const catsList = cats.map(cat =>
    <li>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{cat.name}, {cat.age}</h2>
          <p>{cat.desc}</p>
        </div>
        <figure>
          <img
            src={cat.image}
            alt={cat.name} />
        </figure>
      </div>
    </li>
  )
  return catsList
}

export default App
