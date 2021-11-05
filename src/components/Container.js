import React, { useState } from "react";
import "../App.css";
import Main from "./Main";
import Aside from "./Aside";

function Container() {
  const [text, setText] = useState({ topText: "", bottomText: "" });
  const [imgUrl, setUrl] = useState("https://i.imgflip.com/30b1gx.jpg");
  const [altText, setAltText] = useState("");

  function enterText(event) {
    const { name, value } = event.target;

    setText({ ...text, [name]: value });
  }

  const url = "https://api.imgflip.com/get_memes";

  function getMeme() {
    const randomNumber = Math.floor(Math.random() * 100);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.data.memes[randomNumber].url);
        setAltText(data.data.memes[randomNumber].name);
        console.log(data.data.memes[randomNumber].name);
      });
  }

  return (
    <div className="content">
      <Main
        topText={text.TopText}
        enterText={enterText}
        bottomText={text.bottomText}
        getMeme={getMeme}
      />

      <Aside
        topText={text.topText}
        altText={altText}
        bottomText={text.bottomText}
        imgUrl={imgUrl}
      />
    </div>
  );
}

export default Container;
