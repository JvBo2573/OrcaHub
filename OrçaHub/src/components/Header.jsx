import '../App.css';
import logo from '../assets/logo.png'

function Header() {
    return(
        <div className='containerHeader'>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Header