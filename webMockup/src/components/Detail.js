import React from 'react';
import './../css/Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    let tryAjax = () => {
      // Ajax 요청 - axios -> obj{id, title, img, spec}
      // var req = "/api/getDetail:id"
      // axios.get(req).then(response => {
      //   this.setState({value:response.data});
      // });
    }

    tryAjax();
  }

  render(){
    return (
      <div className="detailView">
        <div className="img">
          <img src="https://dummyimage.com/180x180"/>
        </div>
        <div className="detail">
          <div className="title">
            <p>
              {this.props.id}
            </p>
          </div>
          <div className="spec">
            <p>
              스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙스펙
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
