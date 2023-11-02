import "./navbar.css"
import logo from './images/logo.png';


function Navbar(){
    return(
        <div className="bar-area">
            <div className="bartextarea">
                <img className="navimage" src={logo}/>
               <span className="navtext">My Travel Journal</span> 
            </div>

        </div>
    )
}
export default Navbar;