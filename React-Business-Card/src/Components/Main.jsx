import './Style/Main.css';

export default function Main() {

return (
    <>
        <div className='main'>
            <section className='first-half'>
                <h1>David Zivanic</h1>
                <h2>Software Engineer</h2>
                <h2>David.Zivanic.Website</h2>

                {/* TODO: Add a button to download the CV */}
                <button className='cv-button'>Download CV</button>
                <button className='cv-button'>Download CV</button>
            </section>
            <h3>About Me</h3>
            <p>I am a Software Engineer with a particular interest in making things simple and automating daily tasks.
            I try to keep up with security and best practices, and am always looking for new things to learn.</p>

            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </>
)
}