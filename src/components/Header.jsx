import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
        <NavLink className="nav-item nav-link" to="/">Home</NavLink>
        <NavLink className="nav-item nav-link" to="/movie">Movie</NavLink>
        
            {/* <a className="" href="#" > Home </a>
            <a className="" href="#">Movies</a>*/}
        </div>  

      </nav>
    </header>
  );
}

export default Header;