import Logo from "../assets/logo.png";
import { Link , useNavigate } from "react-router-dom"; 
import useOnline from "../hooks/useOnline";
import useAuth from "../hooks/useAuth";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";


const Title = () => (
  <Link to="/">
    <img
      className="logo"
      src={Logo}
      alt="Savory"
      title="Savory"
    />
  </Link>
);


const Header = () => {
  const navigate = useNavigate();
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");
  const [isLoggedin, setIsLoggedin] = useAuth();
  useEffect(() => {
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage]);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      {isLoggedin && (
        <div className="user-name">Hi {getLocalStorage?.userName}!</div>
      )}
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><i className="fa-solid fa-cart-shopping"></i></li>
          <li>{isLoggedin ? (<button className="logout-btn" onClick={() => {
                  clearLocalStorage();
                  setIsLoggedin(false);}}>Logout
                <span className={isOnline ? "login-btn-green" : "login-btn-red"}>{" "}</span></button>) : (
            <button className="login-btn" onClick={() => navigate("/login")}>Login
            <span className={isOnline ? "login-btn-green" : "login-btn-red"}> {" "} </span>
            </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;