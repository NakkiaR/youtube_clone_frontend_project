import React from "react";
import {Paper, TextField} from '@mui/material'

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        let search = {
            searchTerm: this.state.searchTerm
        }
        this.props.onFormSubmit(search);
        this.setState({
            searchTerm: ''
        })
    }
    render(){
        return(
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} name='searchTerm' value={this.state.searchTerm}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;