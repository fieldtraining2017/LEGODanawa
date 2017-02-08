import React from 'react';

class SearchBar extends React.Component {
  render(){
    return (
      <div>
        <input id="input" type="text"/>
        <button>search</button>
      </div>
    )
  }
};

export default SearchBar;
