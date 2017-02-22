import React from 'react';
import { browserHistory } from 'react-router';
import '../css/btn.css';
import '../css/SearchBar.css';

let searchURL;

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      search: 'sets'
    };
    searchURL = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState({value: value});
    if(value !== "") {
      searchURL = "/search/" + this.state.search + "/" + value;
    } else {
      searchURL = null;
    }
  }

  handleSubmit(evtent) {
    if(searchURL == null) {
      alert("검색어를 입력해주세요.");
      return;
    }
    evtent.preventDefault();
    browserHistory.push(searchURL);
  }

  handleOptionChange(event) {
    if(event.target.value === 'sets')
      this.setState({search: 'sets'});
    else if(event.target.value === 'parts')
      this.setState({search: 'parts'});
  }

  render(){
    return (
      <form className="searchBar" onSubmit={this.handleSubmit}>
        <input className="inputText" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button className="btn" type="submit" to={searchURL}>search</button>
        <div className="radio">
          <span>
            <h3>검색방법 :</h3>
          </span>
          <label>
            <input type="radio" value="sets" checked={this.state.search === 'sets'}  onChange={this.handleOptionChange}/>
            <h3>Sets</h3>
          </label>
          <label>
            <input type="radio" value="parts" checked={this.state.search === 'parts'}  onChange={this.handleOptionChange}/>
            <h3>Parts</h3>
          </label>
        </div>
      </form>
    )
  }
};

export default SearchBar;
