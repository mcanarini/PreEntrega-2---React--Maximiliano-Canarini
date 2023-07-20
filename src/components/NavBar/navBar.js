import cart from './Assets/LogoCanarino.png'
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = ()=>{
    return(
        <nav className="navBar">
            <Link to='/'>
            <img className="Logo" src= {cart} alt="LogoCanarino" />
            </Link>
            <div className="Categories"> 
            <NavLink to={'/category/Remeras'}  className={({isActive}) => isActive? 'ActiveOptions': 'Options'}>Remeras</NavLink>
            <NavLink to={'/category/Camperas'} className={({isActive}) => isActive? 'ActiveOptions': 'Options'}>Camperas</NavLink>
            <NavLink to={'/category/Pantalones'} className={({isActive}) => isActive? 'ActiveOptions': 'Options'}>Pantalones</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
