import React from "react";
import "../../styles/Banner.css";

function Banner({ imageUrl, title, containerClassName, imageClassName, titleClassName }) {
  return (
    <div className={`banner-container ${containerClassName}`}>
      <img className={`banner-img ${imageClassName}`} src={imageUrl} alt="bannière" />
      <h1 className={`banner-title ${titleClassName}`}>{title}</h1>
    </div>
  );
}

export default Banner;
