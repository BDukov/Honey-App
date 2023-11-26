import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

//Import classes from CSS and Pictures files
import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';
import { useAuthContext } from "../../hooks/useAuthContext"


export default function Header() {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const navigate = useNavigate();

  return (
    
        <div className={classes.header}>
            <div className={classes.logo}>
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className={classes.nav}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li onClick={(e) => {
                        e.preventDefault();
                        setTimeout(() => {
                            window.scrollTo({
                                top:document.querySelector('.about-us').offsetTop,
                                behavior: 'smooth',
                            })
                        }, 500)
                        navigate('/');
                    }}><a href="/">About Us</a></li>
                    
                    <li onClick={(e) => {
                        e.preventDefault();
                        setTimeout(() => {
                            window.scrollTo({
                                top:document.querySelector('.types-of-honey').offsetTop,
                                behavior: 'smooth',
                            })
                        }, 500);
                        navigate('/');
                    }}><a href="/">Honey Types</a></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className={classes.user}>
                <ul>
                    {!user && <li><Link to="/login">Login</Link></li>}
                    {!user && <li><Link to="/register">Register</Link></li>}            
                    {user && <li><a href={`/profile/${user.uid}`}>{user.email}</a></li>}
                    {user && <li><Link to="/" onClick={logout}>Logout</Link></li>}
                </ul>
            </div>
        </div>
  );
}
