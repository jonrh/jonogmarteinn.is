import React from "react";
import Image from "react-bootstrap/Image";

const imageStyle = { width: "100%", marginBottom: "1em" };

/** An image that takes up 100% of the width of the parent component */
const FullWidthImage = (props) => <Image src={props.src} style={imageStyle} fluid />;

export default FullWidthImage;