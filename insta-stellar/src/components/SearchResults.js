import React, { useState } from 'react';
import React, { Component } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';

//import Images from './images';


function SearchResults() {
    //state variables
    const [searchText, setSearchText] = useState(null)
    const [amount, setAmount] = useState(null)
    const [apiUrl, setApiUrl] = useState('https://api.nasa.gov/planetary/apod')
    const [apiKey, setApiKey] = useState('cDLoTIe3JzOLSprFyeEmXXwmmd5i4neAA1dyatbH')
    const [images, setImages] = useState([])

    //store keyboard input

    function onTextChange(val){
        setSearchText(val.target.value)//store keyboard input
        if (searchText.length == 10){//if keyboard input is correct date length (yyyymmdd)
            //console.log(this.state.searchText);
        axios.get(`${apiUrl}?api_key=${apiKey}&date=${searchText}`)
        .then(res => setImages([res.data])) //wait till http request responds, THEN do then
        .catch(err => console.log(err));} 
    }

    return (
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
            onChange={onTextChange} />
        </div>
    )
}

export default SearchResults
