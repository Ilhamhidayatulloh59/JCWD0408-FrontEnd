import ButtonStyled from "./components/button"
import Navbar from "./components/navbar"
import "./index.css"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import About from "./pages/about"

function App() {
  const username = "DAVID"
  return (
    // <div>
    //   <Navbar user={username} />
    //   <h1 style={{ color: 'orange' }}>LEARN REACT {username}</h1>
    //   <ButtonStyled />
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cupiditate cum alias doloremque libero consectetur iusto adipisci nisi, ducimus consequatur, deleniti hic eveniet dignissimos. Laboriosam aliquam reprehenderit commodi aperiam, optio doloremque vel error, consequatur unde quam, eius quaerat ad porro omnis consectetur sequi eligendi aspernatur atque dolores perspiciatis! Neque, quasi! Nemo animi earum minima. Ipsum culpa maxime consequatur ipsa aspernatur velit minus asperiores, magni, commodi fugit similique nihil assumenda saepe laudantium numquam ex reprehenderit repellat a id voluptatum unde excepturi impedit? Perferendis nisi, officiis architecto laborum nobis accusantium, exercitationem quia aliquam nihil ullam soluta recusandae similique, quod amet nam quae!</p>
    // </div>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
