import React from 'react';
import SearchList from './../SearchList';

class Search extends React.Component {
  render(){
    return (
      <div>
        <SearchList value={this.props.params.value}/>
      </div>
    );
  }
}

export default Search;
