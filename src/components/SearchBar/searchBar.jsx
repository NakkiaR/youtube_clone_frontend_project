// import React from "react";
// import {Paper, TextField} from '@mui/material'

// class SearchBar extends React.Component {
//     state = {
//         searchTerm: '',
//     }
//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     };
//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onFormSubmit(this.state.searchTerm);
//         this.setState({
//             searchTerm: ''
//           })
//     }
//     render(){
//         return(
//             <Paper elevation={6} style={{ padding: '25px' }}>
//                 <form onSubmit={this.handleSubmit}>
//                     <TextField fullWidth label="Search..." onChange={this.handleChange} name='searchTerm' value={this.state.searchTerm}/>
//                 </form>
//             </Paper>
//         )
//     }
// }

// export default SearchBar;

import React from "react";
import './SearchBar.css';

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
        this.props.onFormSubmit(this.state.searchTerm);
        this.setState({
            searchTerm: ''
          })
    }
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            
              <form className="p-2 flex-fill bd-highlight" onSubmit={this.handleSubmit}>
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} name='searchTerm' value={this.state.searchTerm}/>
                  {/* <span class="input-group-text" id="basic-addon1">This Thing!</span> */}
                  <button className='btn btn-dark btn-sm' height='200' width='200' variant="primary" type="submit">Search</button>
                </form>
              </div>
        </nav>          
            
        )
    }
}
export default SearchBar;