import { Link } from 'react-router-dom';
import '../css/navbar.css'
const Navbar = () => {
    return (
        <div className="navbar_container">
            <ul>
                <li>
                    <Link className='links' to={'/'} >Home</Link>
                </li>
                <li>
                    <Link className='links' to={'/create-post'} >Create Post</Link>
                </li>
                
            </ul>
        </div>
    )
}
export default Navbar;