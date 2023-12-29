import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";

const intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello I'm Abhijeet</span>
        <span className="hello">Hello I'm Abhijeet</span>
        <span className="hello">Hello I'm Abhijeet</span>
      </div>
      <img src={bg} className="bg"/>
    </section>
  );
};

export default intro;
