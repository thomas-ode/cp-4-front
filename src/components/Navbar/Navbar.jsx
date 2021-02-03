import './Navbar.css';
import Burger from './Burger.jsx';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <section>
            <div className="navbar">
                <Link to="/"><img src="https://cdn.iconscout.com/icon/free/png-256/seahawks-283213.png" id="logo" alt="logo seahawks" /></Link>
                <Burger />
            </div>
        </section>
    )
};

export default Navbar;