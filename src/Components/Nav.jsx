
function Nav() {
  return (
    <>
    <header>
        <a href="home.html" className="logo">Cars.</a>
        <nav className="navbar">
            <a href="home.html" className="active" style="--i:1">Home</a>
            <a href="about.html" style="--i:2">About</a>
            <a href="review.html" style="--i:3">Review</a>
            <a href="feature.html" style="--i:4">Featured</a>
            <a href="contactus.html" style="--i:5">Contact Us</a>
        </nav>

        <div className="social-media">
            <a href="#" style="--i:1"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" style="--i:2"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" style="--i:3"><i className="fa-brands fa-instagram"></i></a>
        </div>
    </header>
    </>
  )
}

export default Nav
