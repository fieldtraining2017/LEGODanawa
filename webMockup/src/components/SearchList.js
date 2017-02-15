import React, { Component } from 'react';
import { Link } from 'react-router';

import './../css/SearchList.css';

class SearchList extends React.Component {

  componentDidMount() {
    let tryAjax = () => {
      // Ajax 요청 - axios -> List<obj[option]>{id, title, img}
      // var req = "/api/getList:value(title)" -> ex
      // axios.get(req).then(response => {
      //   this.setState({value:response.data});
      // });

      // Sets View / Parts View 나눌 것!!!
      // ex)
      // parts?page=1&search=brick
      // sets?page=1&search=duplo
    }

  	tryAjax();
  }

  render(){
    return (
      <div>
        <h1>검색결과 : {this.props.value}</h1>

        <ul>
          <li><Row value={this.props.value}/></li>
          <li><Row value={this.props.value}/></li>
          <li><Row value={this.props.value}/></li>
        </ul>
      </div>
    );
  }
}

class Row extends Component {
  render() {
    var detailURL = "/detail/" + this.props.value;
    return (
      <div className="row">
        <div className="img">
          <Link to={detailURL}><img src="https://dummyimage.com/130x130"/></Link>
        </div>
        <div className="name">
          <p>
            <Link to={detailURL}>{this.props.value}</Link>
          </p>
        </div>
      </div>
    )

  }
}

export default SearchList;
