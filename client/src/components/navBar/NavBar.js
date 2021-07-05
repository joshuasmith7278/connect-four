import "./NavBar.css"
import { Link } from "react-router-dom";



const NavBar = () => {

    return (
        <div className="navBar">
            <Link to="/Help"><button className="navButton helpButton">Help</button></Link>
            <Link to="/" style={{textDecoration: 'none'}}><h1 className="navBarTitle">Connect Four</h1></Link>
            <Link to="/Login"><button
            className=" navButton loginButton">Login</button></Link>
            
        </div>
      );

}

 
export default NavBar;