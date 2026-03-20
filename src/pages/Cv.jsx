import './Cv.css'
import cv from '../assets/cv.json'

export default function Cv() {
    return (
        <>
            <div className='page-title'>
                <h1 id='name'>{cv.name}</h1>
                <h2 className='h2'>{cv.headline}</h2>
            </div>
            <section className='cv-content-container'>
                <div className='content'>
                    <div className='content-part'>
                        <h2 className='h2'>Personlig Profil</h2>
                        <p>{cv.personalProfile}</p>
                    </div>
                    <div className='content-part'>
                        <h2 className='h2'>Utbildning</h2>
                        <h3>{cv.school.name}</h3>
                        <h4>{cv.school.role}</h4>
                        <ul>
                            {cv.school.details.map((detail, index) => {
                                return (
                                    <li key={index}>
                                        <p>{detail}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='content'>

                    <h2 className='h2'>Arbetslivserfarenhet</h2>
                    {cv.work.map((job, index) => {
                        return (
                            <div className="content-part" key={index}>
                                <h3>{job.role}</h3>
                                <h4>{job.companyAndYears}</h4>
                                <ul>
                                    {job.tasks.map((tasks, i) => {
                                        return (
                                            <li key={i}>
                                                <p>{tasks}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}