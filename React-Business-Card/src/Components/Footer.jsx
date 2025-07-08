import './Style/Socials.css';
import FaceButt from './Images/Facebook-Icon.png';
import GitButt from './Images/GitHub-Icon.png';

export default function Footer() {

return (
    <>
        <div className='socials'>
            <div className='icons'>
                <img src={FaceButt} />
                <img src={GitButt} />
            </div>  
        </div>
    </>
)
}