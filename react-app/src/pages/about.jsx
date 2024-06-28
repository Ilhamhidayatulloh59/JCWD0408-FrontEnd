import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'
import img1 from '../assets/img1.jpeg'

function About() {
    return (
        <div>
            {/* <Navbar /> */}
            <div>
                <h2>Who are we ?</h2>
                <p>We are Cowboy's 🐴</p>
                <img alt='foto' src={img1} style={{ width: '300px' }} />
            </div>
            <nav>
                <Link to="/" >Home</Link>
            </nav>
        </div>
    )
}

export default About