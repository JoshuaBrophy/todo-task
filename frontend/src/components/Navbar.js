import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
    return (
        <div>
            <header>
                <div>
                    <Link to='/'>
                        my list
                    </Link>
                    <Link to='/add-todo'>
                        add item
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar