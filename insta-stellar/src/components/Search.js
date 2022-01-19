
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
        images: [] 
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
        console.log(this.state.images);
        return (
            <div className='search-section'>
                <TextField className='search-bar'
                label="Enter Date'yyyy-mm-dd'" variant="standard"
                style={{borderColor: 'white', fontSize: 16,}}
                name="searchText" //name of textfeild
                value={this.state.searchText} //from state
                onChange={this.onTextChange} //when the text is changed/typed, run function onTextChange (react/js built-in event handler)
                floatingLabelText="Enter a date in 'YYYY-MM-DD' format" //mui textfeild property
                //fullWidth={true} //mui property
                />
 
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null} {/* if images not empty after search, returm images */}
            </div>
        )
    }
}

export default Search;