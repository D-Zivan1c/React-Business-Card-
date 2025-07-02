import './Style/Main.css';
import face from './Images/my-face.jpeg';

export default function Main() {

return (
    <>
    
        <div className='main'>

            <img className='my-face' src={face} alt="My face" />
            <div className='card-content'>
                <section className='first-half'>
                    <h2>David Zivanic</h2>
                    <h3>Software Engineer</h3>
                    <h3>David.Zivanic.Website</h3>

                    {/* TODO: Add a button to download the CV */}
                    <button className='cv-button'>Download CV</button>
                    <button className='cv-button'>Download CV</button>
                </section>
                <section className='second-half'>
                    <h3>About Me</h3>
                    <p>I am a Software Engineer with a particular interest in making things simple and automating daily tasks.
                    I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                    <h3>Interests</h3>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </section>
            </div>
        </div>
    </>
)
}