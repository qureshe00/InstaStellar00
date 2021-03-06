import React from 'react'
import './HeroSection.css';
import Typography from '@mui/material/Typography';
import Search from '../Search';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="./Earth1.mp4" autoPlay loop muted />
            <Typography className='mainText' mt={25} variant="h1" style={{color:"white", textAlign:"center", justify:"center", 
            fontFamily: "'Orbitron', sans-serif"}} >
                I n s t a S t e l l a r
            </Typography>
            <Typography className='miniText'mt={5} variant="h6" style={{color:"white", textAlign:"center", justify:"center", marginBottom: 5}}>
                enter the date you wish to travel to
            </Typography>
            <div className='hero-btns'>

                <Search/>


            </div>
        </div>
    )
}

export default HeroSection
