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
        id: "1",
        ratio: "251x281"
      },
      {
        image: require("../assets/images/prot1.png"),
        alt: "2",
        id: "2",
        ratio: "275x398"
      },
      {
        image: require("../assets/images/port7.png"),
        alt: "3",
        id: "3",
        ratio: "269x226"
      },
      {
        image: require("../assets/images/port2.png"),
        alt: "4",
        id: "4",
        ratio: "282x301"
      },
      {
        image: require("../assets/images/port6.png"),
        alt: "5",
        id: "5",
        ratio: "332x378"
      },
      {
        image: require("../assets/images/port5.png"),
        alt: "6",
        id: "6",
        ratio: "332x332"
      },
      {
        image: require("../assets/images/port9.png"),
        alt: "7",
        id: "7",
        ratio: "542x317"
      }
    ];
    this.setState({
      images: images
    });
  }

  render() {
    return (
      <div id="portfolio">
        {this.state.images.map(image => (
          <div className={this.getBadgeClasses(image.ratio)}>
            <img src={image.image} alt={image.alt} id={image.id} />
          </div>
        ))}
      </div>
    );
  }

  getBadgeClasses(ratio) {
    //alert(ratio);
    let classes = "";
    if (ratio === "322x332" || ratio === "275x398") {
      classes = "tile scale-anm bcards all";
    } else if (ratio === "282x301" || ratio === "322x332") {
      classes += "tile scale-anm web all";
    } else if (ratio === "332x378" || ratio === "542x317") {
      classes += "tile scale-anm flyers all";
    } else {
      classes = "tile scale-anm all";
    }
    return classes;
  }
}
