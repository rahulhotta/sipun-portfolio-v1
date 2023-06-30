import React from "react";
import "./SkillCard.css";
function SkillCard(props) {
  return (
    <div className="skill__card__container">
      {props.icon}
      <p>{props.skill}</p>
    </div>
  );
}

export default SkillCard;
