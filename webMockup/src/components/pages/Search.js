import React from 'react';

class Search extends React.Component {
  render(){
    return (
      <div>
        <h1>Search : {this.props.params.id}</h1>
      </div>
    );
  }
}

export default Search;
