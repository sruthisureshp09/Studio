import React, { Component } from "react";
//import ReactGallery from "react-photo-gallery";

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    const images = [
      {
        image: require("../assets/images/port90.png"),
        alt: "1",
        id: "1"
      },
      {
        image: require("../assets/images/prot1.png"),
        alt: "2",
        id: "2"
      },
      {
        image: require("../assets/images/port7.png"),
        alt: "3",
        id: "3"
      },
      {
        image: require("../assets/images/port2.png"),
        alt: "4",
        id: "4"
      },
      {
        image: require("../assets/images/port6.png"),
        alt: "5",
        id: "5"
      },
      {
        image: require("../assets/images/port5.png"),
        alt: "6",
        id: "6"
      },
      {
        image: require("../assets/images/port9.png"),
        alt: "7",
        id: "7"
      }
    ];
    this.setState({
      images: images
    });
  }

  render() {
    return (
      <div>
        {this.state.images.map(image => (
          <div className={this.getBadgeClasses(image.image)}>
            <img src={image.image} alt={image.alt} id={image.id} />
          </div>
        ))}
      </div>
    );
  }

  getBadgeClasses(image) {
    //alert(image);
    let classes = "badge m-2 badge-";
    //classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
