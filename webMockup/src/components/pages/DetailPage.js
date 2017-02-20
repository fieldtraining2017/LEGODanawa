import React from 'react';
import Detail from './../Detail';

class DetailPage extends React.Component {
  render(){
    return (
      <div>
        <Detail name={this.props.params.name} partnum={this.props.params.partnum} partimgnum={this.props.params.partimgurl}/>
      </div>
    );
  }
}

export default DetailPage;
