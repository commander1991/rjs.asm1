import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="navContainer">
                <span className="logo">Booking Website</span>
                <div className="navItems">
                    <button className=" navButton">Register</button>
                    <button className=" navButton">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar