import './Home.css'
import hero from '../assets/hero.jpg'

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
                    <a href="portfolio.html">Portfolio</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div className="heroimg-container">
                    <img className="hero-img" src={hero}
                        alt="neonSign: glad You are here" />
                </div>
            </section>
        </>
    )
}