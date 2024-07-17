import { useEffect, useRef, useState } from "react"
import { IUser } from "./type"
import { Card } from "./components/card"

function App() {
  const [count, setCount] = useState<number>(0)
  const [data, setData] = useState<IUser[]>([])
  const elementRef = useRef<HTMLDivElement | null>(null)
  const increment = () => {
    setCount(count + 1)
  }

  const getData = async () => {
    try {
      const res = await fetch('https://randomuser.me/api/?results=10')
      if (res.ok == false) throw "Error fetch"
      const user = await res.json()
      setData(user?.results)
    } catch (err) {
      alert(err)
      console.log(err);
    }
  }

  const changeColor = () => {
    if (count % 2 == 0) {
      if (elementRef.current) {
        elementRef.current.style.backgroundColor = 'pink';
        elementRef.current.style.color = 'white'
      }
    } else {
      if (elementRef.current) {
        elementRef.current.style.backgroundColor = "purple"
        elementRef.current.style.color = 'black'
      }
    }
  }

  useEffect(() => {
    getData()
    console.log("hello");
    changeColor()
  }, [count])

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <div ref={elementRef} style={{ backgroundColor: 'pink', height: '100px', marginTop: '20px' }}>
        kotak
      </div>
      { 
        data.map((item) => {
          return (
            <Card item={item} />
          )
        })
      }
    </div>
  )
}

export default App
