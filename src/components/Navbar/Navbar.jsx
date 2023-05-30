import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-navbar">
                <Link to="/"><img src="/Placeholders/Logo.svg" alt="" /></Link>
                <ul className="nav-links">
                    <li><NavLink to="/">PRODUCTS</NavLink></li>
                    <li><NavLink to="/add">ADD</NavLink></li>
                    {/* <li><NavLink to="/contact">CONTACT</NavLink></li> */}
                    <img className='icon-sm' src="/Placeholders/search.svg" alt="" />
                    <li><NavLink to="/login"><span>Login</span></NavLink></li>
                    {/* <li><NavLink to="/checkout"><img className='icon-sm' src="/Placeholders/shopping-cart.svg" alt="" /></NavLink></li> */}
                    {/* <li className="dropdown-menu dropdown-menu-end shopping-cart">
                        <ShoppingCart />
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar