import './Portfolio.css'

import giftlist from '../assets/ChristmasList.PNG'
import first from '../assets/firstapi.PNG'
import icecream from '../assets/icecream.jpg'
import inheritance from '../assets/Arv.PNG'

export default function Portfolio() {
    return (
        <>
            <h1 className='heading'>My portfolio projects</h1>
            <section className="p-content-container">

                <div className="card">
                    <img src={giftlist} alt="project image:christmas gift checklist" />
                    <h2>The Christmas Gift List</h2>
                    <p>My first fullstack project! (- in production) </p>
                    <p>Tech stack: Blazor, C#, CSS,.Net Identity,<br /> Entity Framework, Microsoft SQL Server</p>
                    <div className="buttons">
                        <a href="https://github.com/NadineL1/GiftList">View my code on Github</a>
                        <a href="#popup1" className="btn">More info</a>
                    </div>
                </div>
                <div id="popup1" className="modal">
                    <div className="modal-content">
                        <h2>More about ChristmasList</h2>
                        <p> My idéa sparked when having a busy schedule leading up to christmas
                            and getting stressed about planning all christmas gift.
                            I started with learning about figma and UI/UX design to be able to make my
                            idea into a mockup.
                            Right now i have a functional gift list page - as its the core of my app. Its created
                            using .NETs Blazor with some css and
                            database with SQL and Entity Framework.
                            To come: more pages to plan with like budget and gift receivers(extending db with more tables),
                            Working more with identity and accounts, connection to their own database. Azure Db and deploy.
                        </p>
                        <a href="#" className="modal-close">&times;</a>
                    </div>
                </div>

                <div className="card"><img src={first} alt="codesnippet, API in C#" />
                    <h2>My first REST API</h2>
                    <p>REST API in C# with EntityFramework(ORM)</p>

                    <div className="buttons">
                        <a href="https://github.com/NadineL1/FirstAPI">View my code on Github</a>
                        <a href="#popup2" className="btn">More info</a>
                    </div>
                </div>
                <div id="popup2" className="modal">
                    <div className="modal-content">
                        <h2>Learning by doing</h2>
                        <p>
                            Took a quick course and did a code along with notes to learn about REST APIs
                            and how to implement them.
                        </p>
                        <a href="#" className="modal-close">&times;</a>
                    </div>
                </div>

                <div className="card">
                    <img src={icecream} alt="icecream" />
                    <h2>Queue for icecream</h2>
                    <p>Small console application in C#</p>
                    <p>Focus: Learning and practicing queues with separate methods </p>
                    <div className="buttons">
                        <a href="https://github.com/NadineL1/QueueForIcecream">View my code on Github</a>
                        <a href="#popup3" className="btn">More info</a>
                    </div>
                </div>
                <div id="popup3" className="modal">
                    <div className="modal-content">
                        <h2>Learning by doing</h2>
                        <p>
                            A quick school project that I added my own flare to.
                        </p>
                        <a href="#" className="modal-close">&times;</a>
                    </div>
                </div>

                <div className="card">
                    <img src={inheritance} alt="codesnippet, ConsoleApp in C#" />
                    <h2>Inheritance - theZoo</h2>
                    <p>Console application in C#.</p>
                    <p>Focus: Learning and practicing what i learned about classes and inheritance</p>
                    <div className="buttons">
                        <a href="https://github.com/NadineL1/Inheritance-theZoo.git">View my code on Github</a>
                        <a href="#popup4" className="btn">More info</a>
                    </div>
                </div>
                <div id="popup4" className="modal">
                    <div className="modal-content">
                        <h2>Learning by doing</h2>
                        <p>
                            One of the first school assignments, had a great deal of fun making this.
                            Learned a lot, added som extra things like the use of Random-class, to implement hunting methods
                            to specific animal subclasses,
                            from earlier weeks to practice and continue building on what Ive learned.
                        </p>
                        <a href="#" className="modal-close">&times;</a>
                    </div>
                </div>


            </section>
        </>
    )
}