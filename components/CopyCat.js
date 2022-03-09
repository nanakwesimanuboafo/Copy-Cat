import React from "react";
import { styles } from "../styles";
import PropTypes from "prop-types";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const input = this.props.input;
    const handleChange = this.props.handleChange;

    return (
      <div style={styles.divStyles}>
        <h1 styles={{ marginBottom: 80 }}>Copy Cat{this.props.name}</h1>
        <input type="text" value={input} onChange={handleChange} />
        <img
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
        <p>{copying && input}</p>
      </div>
    );
  }
}

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  copying: PropTypes.string.isRequired,
  toggleTape: PropTypes.func.isRequired,
  name: PropTypes.string,
};

CopyCat.defaultProps = {
  name: "Tom",
};
