import React from 'react';
import Detail from './../Detail';

class DetailPage extends React.Component {
  render(){
    return (
      <div>
        <Detail id={this.props.params.id}/>
      </div>
    );
  }
}

export default DetailPage;
