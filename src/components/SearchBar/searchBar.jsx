

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
             <form className="p-2 w-100 bd-highlight" onSubmit={this.handleSubmit}>
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} name='searchTerm' value={this.state.searchTerm}/>
                  <div className="p-2 flex-shrink-1 bd-highlight">
                  <button className='btn btn-dark btn-sm' height='200' width='200' variant="primary" type="submit">Search</button></div>
             </form>
            </div>
        </nav>          
        )
    }
}
export default SearchBar;

