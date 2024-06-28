import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'

function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <div>
                <h2>Welcome to homepage 👨🏻‍💻</h2>
                <p>You can do this, I believe in you 🔥</p>
            </div>
            <nav>
                <Link to="/about" >About</Link>
            </nav>
        </div>
    )
}

export default Home