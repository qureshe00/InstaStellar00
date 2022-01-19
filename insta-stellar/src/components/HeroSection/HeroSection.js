import { Button } from '@mui/material'
//import '../App.css';
import React from 'react'
import './HeroSection.css';
import Typography from '@mui/material/Typography';
import Search from '../Search';


//public\Worm Hole - 6797.mp4
//C:\Users\Eesha\InstaStellar00\insta-stellar\public\WormHole.mp4
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./Earth1.mp4" autoPlay loop muted />
            <Typography className='mainText' mt={15} variant="h1" style={{color:"white", textAlign:"center", justify:"center"}}>
                I n s t a S t e l l a r
            </Typography>
            <Typography className='miniText'mt={5} variant="h6" style={{color:"white", textAlign:"center", justify:"center"}}>
                enter the date you wish to travel to
            </Typography>
            <div className='hero-btns'>

                <Search/>


            </div>
        </div>
    )
}

export default HeroSection
