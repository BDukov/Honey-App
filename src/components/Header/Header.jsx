import { Link } from "react-router-dom";


//Import classes from CSS and Pictures files
import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';


export default function Header() {


  return (

    // <div className="container">
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top:document.querySelector('.about-us').offsetTop,
                            behavior: 'smooth',
                        })
                    }}><a href="#">About Us</a></li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top:document.querySelector('.types-of-honey').offsetTop,
                            behavior: 'smooth',
                        })
                    }}><a href="#">Types Of Honey</a></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className={classes.user}>
                <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    // </div>
  );
}
