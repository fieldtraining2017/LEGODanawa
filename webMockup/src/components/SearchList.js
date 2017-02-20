import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import './../css/SearchList.css';

let server = 'http://192.168.0.36:1337';

class SearchList extends React.Component {

  componentDidMount() {
    let tryAjax = () => {
      var page = 1;
      var search = '3 X 4';
      var req = server + '/parts?page=' + page + '&search=' + this.props.value;

      axios.get(req).then(response => {
        this.setState({value: response.data});
        console.log(this.state.value.results);
      });

      // Sets View / Parts View 나눌 것!!!
      // ex)
      // parts?page=1&search=brick
      // sets?page=1&search=duplo
    }

  	tryAjax();
  }

  render(){
    if (this.state && this.state.value){
  		var rtn = this.state.value.results.map(function(object, i){
  			return <Row obj={object} key={i} />;
  		});
  		return (
        <div>
          <h1>검색결과 : {this.props.value}</h1>
          <ul>
    				{rtn}
          </ul>
        </div>
  		);
	  } else {
  		return (
  			<div>로딩로딩</div>
  		);
  	}
  }
}

class Row extends Component {
  render() {
    var detailURL = "/detail/" + this.props.obj.part_num;
    return (
      <li className="row">
        <div className="img">
          <Link to={detailURL}><img src={this.props.obj.part_img_url}/></Link>
        </div>
        <div className="name">
          <p>
            <Link to={detailURL}>{this.props.obj.name}</Link>
          </p>
        </div>
      </li>
    )

  }
}

export default SearchList;
