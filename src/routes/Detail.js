import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(this.props);
    if (location.state) {
      return (
        <div className="detail__box">
          <img src={location.state.poster} className="detail__poster"></img>
          <span className="detail__year">{location.state.year}</span>
          <span className="detail__title">{location.state.title}</span>
          <span className="detail__genres">{location.state.genres}</span>
          <p className="detail__summary">{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
