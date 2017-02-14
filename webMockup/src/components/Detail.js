import React from 'react';
import './../css/Detail.css';

class Detail extends React.Component {
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
