import React, { Component } from 'react';
import './../css/Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    let tryAjax = () => {
    }

    tryAjax();
  }

  render(){
    var imgUrl = null;
    var isSets = this.props.div === 'sets' ? true : false;
    console.log(this.props);
    if (this.props.imgnum !== "null") {
      imgUrl = "https://m.rebrickable.com/media/"+ (isSets ? "sets/" : "parts/elements/") + this.props.imgnum + ".jpg"
    } else {
      imgUrl = "https://dummyimage.com/200x200";
    }

    return (
      <div className="detail">
        <div className="detail_img">
          <img src={imgUrl}/>
        </div>
        <div className="detail_title">
          <p>
            {this.props.num} : {this.props.name}
          </p>
        </div>
        <div className="view_sellers">
          <ViewSeller />
        </div>
      </div>
    );
  }
}

class ViewSeller extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick(url) {
    window.open(url, '');
  }

  render() {
    return (
        <table className="tg">
          <thead>
            <tr>
              <th className="tg-y50h" onClick={this.handleOnClick.bind(this, "http://www.naver.com")}>한국레고샵</th>
              <th className="tg-y50h" onClick={this.handleOnClick.bind(this, "http://toysrus.lottemart.com/")}>토이저러스</th>
              <th className="tg-y50h" onClick={this.handleOnClick.bind(this, "http://www.brickstar.co.kr/")}>브릭스타</th>
              <th className="tg-y50h" onClick={this.handleOnClick.bind(this, "http://www.brickmaniax.com/")}>브릭매니악스</th>
              <th className="tg-y50h" onClick={this.handleOnClick.bind(this, "http://www.brickcode.co.kr/")}>브릭코드</th>
              <th className="tg-y50h" onClick={this.handleOnClick.bind(this, "http://www.brickwiz.com/")}>브릭나라</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-yw4l"></td>
              <td className="tg-yw4l"></td>
              <td className="tg-yw4l">840,000</td>
              <td className="tg-yw4l"></td>
              <td className="tg-yw4l"></td>
              <td className="tg-yw4l"></td>
            </tr>
          </tbody>
        </table>
    )
  }
}

export default Detail;
