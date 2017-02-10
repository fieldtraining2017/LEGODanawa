import React from 'react';
import SearchList from './../SearchList';

class Search extends React.Component {
  render(){
    return (
      <div>
        <h1>Search : {this.props.params.value}</h1>
        <SearchList value={this.props.params.value}/>
      </div>
    );
  }
}

export default Search;
