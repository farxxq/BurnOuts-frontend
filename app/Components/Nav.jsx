import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <NavLink to={"/"} exact className="logo">
          BurnOutz.
        </NavLink>
        <nav className="navbar">
          <NavLink to={"/"} exact activeclassName="active">
            Home
          </NavLink>
          <NavLink to={"/about"} exact activeclassName="active">
            About
          </NavLink>
          <NavLink to={"/review"} exact activeclassName="active">
            Review
          </NavLink>
          <NavLink to={"/featured"} exact activeclassName="active">
            Featured
          </NavLink>
          <NavLink to={"/contact"} exact activeclassName="active">
            Contact Us
          </NavLink>
        </nav>

        <div className="social-media">
          <a href="https://www.linkedin.com/in/farxxq/">
            <i className="ri-linkedin-fill"></i>
          </a>
          <a href="#">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://github.com/farxxq/">
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </header>
    </>
  );
}

export default Nav;
