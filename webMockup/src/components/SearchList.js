import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import './../css/SearchList.css';

class SearchList extends React.Component {

  componentDidMount() {
    let tryAjax = () => {
      var server = 'http://0.0.0.0:1337'
      var page = 1;
      var req = server + '/' + this.props.div + '?page=' + page + '&search=' + this.props.value;

      axios.get(req).then(response => {
        this.setState({value: response.data});
        console.log(this.state.value.results);
      });
    }

  	tryAjax();
  }

  render(){
    var rtn = '<li>검색결과가 없습니다</li>';
    if (this.state && this.state.value){
      if(this.props.div === 'sets') {
    		rtn = this.state.value.results.map(function(object, i){
    			return <Row div='sets' obj={object} key={i} />;
    		});
      } else {
        rtn = this.state.value.results.map(function(object, i){
          return <Row div='parts' obj={object} key={i} />;
        });
      }

  		return (
        <div>
          <h1>검색결과 : {this.props.value} / {this.props.div}</h1>
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
    var isSets = this.props.div === 'sets' ? true : false;
    var imgSrc = isSets ? this.props.obj.set_img_url : this.props.obj.part_img_url;
    var imgnum;

    if(imgSrc !== null) {
      console.log(imgSrc);
      imgnum = JSON.stringify(imgSrc).split("/")[isSets ? 5 : 6].split(".")[0];
    } else {
      imgnum = null;
    }

    var detailURL =
      '/detail/' + this.props.div +
      '/name=' + encodeURIComponent(this.props.obj.name) +
      '&num=' + (isSets ? this.props.obj.set_num : this.props.obj.part_num) +
      '&imgnum=' + imgnum;

    return (
      <li className="row">
        <div className="img">
          <Link to={detailURL}><img src={imgSrc}/></Link>
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
