import React from 'react';
import './landing-page.css'
import profile from '../assets/profile.jpeg'

function LandingPage() {
    return (
     <div>
        <div className='first-page'>
        <div className='header'>
            <div className='header-options'><span className='options'>About</span></div>
            <div className='header-options'><span className='options'>Skills</span></div>
            <div className='header-options'><span className='options'>Experience</span></div>
            <div className='header-options'><span className='options'>Projects</span></div>
            <div className='header-options'><span className='options'>Contact</span></div>
        </div>
        <div className='body'>
        <div className='profile-img'>
                <img src={profile} alt='profile' height={610} width={610}/>
            </div>
            <div className='title-message'>
                <div>I'M<span className='name'> Nikhil Kumar</span></div>
                <div className='desc'>Software Developer</div>
            </div>
        </div>
        </div>
        <div className='second-page'>
        </div>
    </div>
     );
}

export default LandingPage;