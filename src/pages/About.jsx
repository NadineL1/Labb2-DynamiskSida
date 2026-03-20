import './About.css'

//importing images from assets
import coffee from '../assets/coffee.jpg'
import cooking from '../assets/cooking.jpg'
import dog from '../assets/dog.jpg'
import workout from '../assets/gym.jpg'
import reading from '../assets/reading.jpg'
import sewing from '../assets/sewing.jpg'

export default function About() {
    return (
        <>
            <h1>Things I Like(a lot!)</h1>
            <div className="hobbies">

                <ul>
                    <li><img className="hobby-image" src={coffee} alt="coffee" />
                        <h2>Coffee</h2>
                    </li>
                    <li><img className="hobby-image" src={cooking} alt="cooking" />
                        <h2>Cooking</h2>
                    </li>
                    <li><img className="hobby-image" src={dog} alt="dog" />
                        <h2>Animals</h2>
                    </li>
                    <li><img className="hobby-image" src={workout} alt="workout" />
                        <h2>Working out</h2>
                    </li>
                    <li><img className="hobby-image" src={reading} alt="books" />
                        <h2>Reading</h2>
                    </li>
                    <li><img className="hobby-image" src={sewing} alt="sewing" />
                        <h2>Sewing</h2>
                    </li>
                </ul>
            </div>
        </>
    )
}