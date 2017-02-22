import React from 'react';
import Detail from './../Detail';

class DetailPage extends React.Component {
  render(){
    return (
      <div>
        <Detail div={this.props.params.div} name={this.props.params.name} num={this.props.params.num} imgnum={this.props.params.imgurl}/>
      </div>
    );
  }
}

export default DetailPage;
