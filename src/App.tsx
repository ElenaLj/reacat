import wearyCat from "./assets/cat-weary-svg-com.svg"
import satisfiedCat from "./assets/cat-lol-svg-com.svg"

import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={satisfiedCat} className="logo" alt="Vite logo" />
          <img src={wearyCat} className="logo" alt="React logo" />
      </div>
      <h1>Happy Cat & Moody Cat</h1>
     
    </>
  )
}

export default App
