
import React, { Component } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import ImageResults from './ImageResults';

//import Images from './images';


class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://api.nasa.gov/planetary/apod',
        apiKey: 'cDLoTIe3JzOLSprFyeEmXXwmmd5i4neAA1dyatbH',
        images: [] ,
        error: false,
        helper: ""
    }

    dateValidation = () => {

        let min = new Date('1995-06-16')
        let max = new Date()
        let searchDate = new Date(this.searchText)
        if (searchDate >= min && searchDate <= max ){ //if valid date within bounds
            this.helper = "" 
        }
        else if (searchDate < min) { //too long ago
            this.setState({helper : "date cannot precede 1995-06-16"})
        }

        else if (searchDate > max){
            this.setState({helper : "date cannot be in the future"})
        }

        else if (isNaN(searchDate)){//invalid input string
            this.setState({helper : "please enter date as 'yyyy-mm-dd'"})

        }
    }


    onTextChange = e => { //create function to handle text change event
        this.setState({ [e.target.name]: e.target.value }, () => { //updating searchText state variable every time a letter is typed/deleted
            if (this.state.searchText.length == 10){
            //console.log(this.state.searchText);
            axios.get(`${this.state.apiUrl}?api_key=${this.state.apiKey}&date=${this.state.searchText}`)
            .then(res => this.setState({images: [res.data]})) //wait till http request responds, THEN do then
            .catch(err => console.log(err));} 
        });
    };


    render() {
        console.log(this.state);
        return (
            <div className='search-section'>
                <TextField className='search-bar'
                label="'yyyy-mm-dd'" variant="standard"
                sx={{label:{color:'white'}, input:{color: 'white'}}}
                name="searchText" //name of textfeild
                value={this.state.searchText} //from state
                onChange={(e)=>{this.onTextChange(e);this.dateValidation()}} //when the text is changed/typed, run function onTextChange (react/js built-in event handler)
                //fullWidth={true} //mui property
                id="standard-error-helper-text"
                error={this.error}
                label="'yyyy-mm-dd'"
                helperText={this.helper}/>
 
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null} {/* if images not empty after search, returm images */}
            </div>
        )
    }
}

export default Search;