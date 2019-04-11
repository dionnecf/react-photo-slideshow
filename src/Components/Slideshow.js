import React, { Component } from "react";
import "./Slideshow.css";

const NUMBER_PHOTOS = 8;

export class Slideshow extends React.Component {
  constructor() {
    super();
    this.state = {
      photoNumber: 1
    };

    setInterval(this.changePicture, 5000);
  }

  changePicture = () => {
    if (this.state.photoNumber + 1 > NUMBER_PHOTOS) {
      this.setState({
        photoNumber: 1
      });
    } else {
      this.setState({
        photoNumber: this.state.photoNumber + 1
      });
    }
  };
  renderPictures() {
    let pictures = [];

    for (let i = 1; i <= NUMBER_PHOTOS; i++) {
      const url = `/photo${i}.jpg`;
      const className = i === this.state.photoNumber ? "active" : "";
      pictures.push(<img key={i} className={className} src={url} />);
    }
    return pictures;
  }
  render() {
    return (
      //<h1>Slideshow component</h1>

      // <div className="Slideshow">{this.renderPictures()}</div>
      <div className="Slideshow">{this.renderPictures()}</div>
    );
  }
}
