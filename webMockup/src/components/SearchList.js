import React, { Component } from 'react';
import { Link } from 'react-router';
import './../css/SearchList.css';

class SearchList extends React.Component {

  componentDidMount() {

    let tryAjax = () => {
        var req = '/api/search/' + this.props.value;
        // 정보 가져오기
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
