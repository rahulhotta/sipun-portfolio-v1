import React from "react";
import Navbar from "../../Components/navigation/Navbar";
import styles from "./About.module.css";
import Image from "next/image";
import about_image from "../../Assets/about_image-removebg.png";
import SkillCard from "@/Components/skills/SkillCard";
import { FaJava, FaGitSquare } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { AiFillHtml5, AiFillGitlab } from "react-icons/ai";
import { SiSelenium, SiJira, SiBlazemeter } from "react-icons/si";
import jmeter from "../../Assets/skill-logos/Jmeter.png";
import selenium from "../../Assets/skill-logos/selenium.png";
import sql from "../../Assets/skill-logos/sql.png";
import git from "../../Assets/skill-logos/git.png";
import appium from "../../Assets/skill-logos/Appium.png";
import jenkins from "../../Assets/skill-logos/jenkins.png";
import rpa from "../../Assets/skill-logos/rpa.png";
import jira from "../../Assets/skill-logos/jira.png";
import java from "../../Assets/skill-logos/Java.png";
import testng from "../../Assets/skill-logos/testng.png";
import blazemeter from "../../Assets/skill-logos/blazemeter.png";
import playwright from "../../Assets/skill-logos/playwright-logo.svg";
import restAssured from "../../Assets/skill-logos/rest-assured.png";
import Button from "@/Components/UI/Button/Button";
import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'
function page() {
  const skill_list = [
    {
      icon: java,
      skill: "JAVA",
    },
    // {
    //   icon: sql,
    //   skill: 'SQL'
    // },
    {
      icon: appium,
      skill: "Appium",
    },
    {
      icon: selenium,
      skill: "SELENIUM",
    },
    {
      icon: testng,
      skill: "TestNg",
    },
    {
      icon: git,
      skill: "Git",
    },
    {
      icon: jenkins,
      skill: "Jenkins",
    },
    {
      icon: jira,
      skill: "Jira",
    },
    {
      icon: blazemeter,
      skill: "Blazemeter",
    },
    {
      icon: jmeter,
      skill: "Jmeter",
    },
    {
      icon: rpa,
      skill: "RPA",
    },
    {
      icon: playwright,
      skill: "Playwright",
    },
    {
      icon: restAssured,
      skill: "Rest Assured",
    },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.about__container}>
        <Image
          src={about_image}
          className={styles.about__img}
          title={"customer"}
          alt="about-image"
        />
        <div className={styles.about__right}>
          <div className={styles.about__about_me}>
            <h1 className={styles.about__heading}>About Me</h1>
            <p className={styles.about__desc}>
              Over 7+ years of IT experience in both large MNC organization and
              startup company with over 3 years of experience in web-based and
              Mobile application(Android and IOS) testing and automation using
              Selenium, testNG and Appium in Java language. 
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
                    img={item.icon}
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
