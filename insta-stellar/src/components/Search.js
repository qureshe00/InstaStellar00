
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
        helper: "",
        validText: false
    }

    dateValidation = (e) => {

        let min = new Date('1995-06-16')
        let max = new Date()
        let searchDate = new Date(e.target.value)

        if(e.target.value.length < 10 || isNaN(searchDate)){
            this.setState({
                helper : "please enter date as 'yyyy-mm-dd'", 
                validText : false
            })
        } else if (searchDate >= min && searchDate <= max ){ //if valid date within bounds
            this.setState({helper : "" })
            this.setState({validText : true})
        } else if (searchDate < min) { //too long ago
            this.setState({helper : "date cannot precede 1995-06-16"})
            this.setState({validText : false})
        } else if (searchDate > max){
            this.setState({helper : "date cannot be in the future"})
            this.setState({validText : false})
        } 
    }


    onTextChange = e => { //create function to handle text change event
        this.setState({ searchText: e.target.value }, () => { //updating searchText state variable every time a letter is typed/deleted
            console.log(this.state.searchText, this.validText, 'hi')
            if (this.state.searchText.length == 10 && this.state.validText){
            console.log('hi');
            axios.get(`${this.state.apiUrl}?api_key=${this.state.apiKey}&date=${this.state.searchText}`)
            .then(res => this.setState({images: [res.data]})) //wait till http request responds, THEN do then
            .catch(err => console.log(err));}
            else { this.setState({images: []})}
        });
    };


    render() {
        console.log(this.state);
        return (
            <div className='search-section'>
                <TextField className='search-bar'
                label="'yyyy-mm-dd'" variant="standard"
                sx={{label:{color:'white'}, input:{color: 'white'}, "& .MuiFormHelperText-root":{color: 'white'}}}
                name="searchText" //name of textfeild
                value={this.state.searchText} //from state
                onChange={(e)=>{this.dateValidation(e);this.onTextChange(e)}} //when the text is changed/typed, run function onTextChange (react/js built-in event handler)
                //fullWidth={true} //mui property
                id="standard-error-helper-text"
                error={this.error}
                label="'yyyy-mm-dd'"
                helperText={this.state.helper}/>
 
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null} {/* if images not empty after search, returm images */}
            </div>
        )
    }
}

export default Search;