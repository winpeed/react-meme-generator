import React from "react";

function Aside(props) {
  return (
    <div className="meme">
      <h2 className="meme-text meme-top">{props.topText}</h2>
      <img src={props.imgUrl} alt={props.altText} className="meme-img" />
      <h2 className="meme-text meme-bottom">{props.bottomText}</h2>
    </div>
  );
}

export default Aside;
