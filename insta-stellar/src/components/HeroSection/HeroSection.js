import { Button } from '@mui/material'
//import '../App.css';
import React from 'react'
import './HeroSection.css';

//public\Worm Hole - 6797.mp4
//C:\Users\Eesha\InstaStellar00\insta-stellar\public\WormHole.mp4
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="../Space2.mp4" autoPlay loop muted />
            <h1> text here </h1>
            <p> more text here </p>
            <div className='hero-btns'>
                <Button
                  className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large' 
                >
                    even more text here
                </Button>


            </div>
        </div>
    )
}

export default HeroSection
