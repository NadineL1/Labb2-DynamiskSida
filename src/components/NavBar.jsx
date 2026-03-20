import { NavLink } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
    return (
        <header>
            <nav>
                <div className="logo"><NavLink to="/">Nadine Lindell</NavLink></div>
                <ul>
                    <li><NavLink to="/about">About me</NavLink></li>
                    <li><NavLink to="/cv">CV</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}