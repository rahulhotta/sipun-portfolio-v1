import React from "react";
import "./SkillCard.css";
import Image from "next/image";
function SkillCard(props) {
  return (
    <div className="skill__card__container">
      <Image src={props.img} alt="skill" srcset="" className="skill__card__icon"/>
      <p className="skill__card__text">{props.skill}</p>
    </div>
  );
}

export default SkillCard;
