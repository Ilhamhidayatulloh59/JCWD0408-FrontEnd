import { useSelector } from "react-redux"

function DisplayCounter() {
    const number = useSelector((state) => state.counter.value)
    return (
        <h1>{number}</h1>
    )
}

export default DisplayCounter