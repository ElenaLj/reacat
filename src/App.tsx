
import './App.css'

const cats: Cat = [
  {
    id: 0,
    name: "Merlino",
    age: 2,
    colour: "white and black",
    desc: "lorem ipsum Merlino"
  },
  {
    id: 1,
    name: "Milly",
    age: 2,
    colour: "black and white",
    desc: "lorem ipsum Milly"
  },
]

type Cat = {
  id: number,
  name: string,
  age: number,
  colour: string,
  desc: string
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
      <p>{cat.name}</p>
      <p>{cat.age}</p>
      <p>{cat.desc}</p>
    </li>)
  return catsList
}

export default App
