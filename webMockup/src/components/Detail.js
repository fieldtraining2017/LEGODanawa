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
    var imgUrl = null;
    console.log(this.props)
    if (this.props.partimgnum !== "null") {
      imgUrl = "https://m.rebrickable.com/media/parts/elements/" + this.props.partimgnum + ".jpg"
    } else {
      imgUrl = "https://dummyimage.com/200x200";
    }

    return (
      <div className="detailView">
        <div className="detail_img">
          <img src={imgUrl}/>
        </div>
        <div className="detail">
          <div className="detail_title">
            <p>
              {this.props.partnum} : {this.props.name}
            </p>
          </div>
          <div className="detail_spec">
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
