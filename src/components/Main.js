import React from "react";

function Main(props) {
  return (
    <div className="input-area">
      <section>
        <label>Top Text:</label>
        <br />
        <input
          type="text"
          value={props.topText}
          name="topText"
          onChange={props.enterText}
          required
        />
      </section>

      <section>
        <label>Bottom Text:</label>
        <br />
        <input
          type="text"
          value={props.bottomText}
          name="bottomText"
          onChange={props.enterText}
          required
        />
      </section>

      <button onClick={props.getMeme} className="btn">
        Generate
      </button>
    </div>
  );
}

export default Main;
