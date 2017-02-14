import React from 'react';
import { Link } from 'react-router';

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
    let DetailURL = "/detail/" + this.props.value;
    return (
      <div>
        this.props.value : <Link to={DetailURL}>{this.props.value}</Link>
      </div>
    );
  }
}

export default SearchList;
