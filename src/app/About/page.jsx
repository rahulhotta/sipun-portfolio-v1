import React from "react";
import Navbar from "../.././Components/Navbar/Navbar";
import styles from "./About.module.css";
import Image from "next/image";
import about_image from "../../Assets/About_img-removebg-preview.png";
import SkillCard from "@/Components/Skill-card/SkillCard";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { SiSelenium } from "react-icons/si";
function page() {
  const skill_list = [
    {
      icon: <FaJava />,
      skill: "JAVA",
    },
    {
      icon: <TbSql />,
      skill: "SQL",
    },
    {
      icon: <AiFillHtml5 />,
      skill: "HTML5",
    },
    {
      icon: <SiSelenium />,
      skill: "SELENIUM",
    },
    {
      icon: <FaJava />,
      skill: "TestNg",
    },
    {
      icon: <FaJava />,
      skill: "TestNg",
    },
  ];
  return (
    <>
      <Navbar />
      <div className={styles.about__container}>
        <Image src={about_image} className={styles.about__img} />
        <div className={styles.about__right}>
          <div className={styles.about__about_me}>
            <h1 className={styles.about__heading}>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur consectetur totam earum harum ratione. Ipsam iusto
              saepe repellat dolorem, dicta nihil quos commodi! Adipisci fugit
              praesentium distinctio! Optio deserunt, eveniet reprehenderit quos
              aut rem.
            </p>
          </div>
          <div className={styles.about__skills}>
            <h1 className={styles.about__heading}>My Skills</h1>
            <div className={styles.skills__container}>
            {skill_list.map((item) => {
              return (
                <SkillCard
                  key={item.skill}
                  skill={item.skill}
                  icon={item.icon}
                />
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
