import './Home.css'
import hero from '../assets/hero.jpg'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <section className="hero-content-container">
                <div className="hero-content">
                    <h1>Nadine Lindell</h1>
                    <h2>Fullstack Developer</h2>
                    <p>.NET Fullstack developer student with a passion for problem solving & a sharp eye for details.
                        I'm
                        exited to learn more and become at least 1% better each day. Former store-manager with a big
                        creative streak.</p>
                    <div><Link to="/portfolio">Portfolio</Link>
                        <Link to="/Contact">Contact</Link></div>
                </div>
                <div className="heroimg-container">
                    <img className="hero-img" src={hero}
                        alt="neonSign: glad You are here" />
                </div>
            </section>
        </>
    )
}