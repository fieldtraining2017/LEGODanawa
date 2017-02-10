import React from 'react';
import { browserHistory } from 'react-router';
import '../css/btn.css';
import '../css/SearchBar.css';

let searchURL;

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    searchURL = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState({value: value});
    if(value !== "") {
      searchURL = "/search/" + value;
    } else {
      searchURL = null;
    }
  }

  handleSubmit(evt) {
    if(searchURL == null) {
      alert("검색어를 입력해주세요.");
      return;
    }
    evt.preventDefault();
    browserHistory.push(searchURL);
  }

  render(){
    return (
      <form className="searchBar" onSubmit={this.handleSubmit}>
        <input className="inputText" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button className="btn" type="submit" to={searchURL}>search</button>
      </form>
    )
  }
};

export default SearchBar;
