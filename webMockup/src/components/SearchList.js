import React from 'react';

class SearchList extends React.Component {

  componentDidMount() {

    let tryAjax = () => {
        var req = '/api/search/' + this.props.value;
        // axios.get(req).then(response => {
        //     this.setState({value:response.data});
        // });
    }

    tryAjax();
  }

  render(){
    return (
      <div>
        this.props.value : {this.props.value}
      </div>
    );
  }
}

export default SearchList;
