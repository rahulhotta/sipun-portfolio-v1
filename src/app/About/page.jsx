import React from 'react';
import Navbar from '../../Components/navigation/Navbar';
import styles from './About.module.css';
import Image from 'next/image';
import about_image from '../../Assets/About_img-removebg-preview.png';
import SkillCard from '@/Components/skills/SkillCard';
import { FaJava, FaGitSquare } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { AiFillHtml5, AiFillGitlab } from 'react-icons/ai';
import { SiSelenium, SiJira, SiBlazemeter } from 'react-icons/si';
import jmeter from '../../Assets/skill-logos/jmeter.png';
import selenium from '../../Assets/skill-logos/selenium.png'
import sql from '../../Assets/skill-logos/sql.png'
import git from '../../Assets/skill-logos/git.png'
import appium from '../../Assets/skill-logos/Appium.png'
import jenkins from '../../Assets/skill-logos/jenkins.png'
import rpa from '../../Assets/skill-logos/rpa.png'
import jira from '../../Assets/skill-logos/jira.png'
import java from '../../Assets/skill-logos/java.png'
import testng from '../../Assets/skill-logos/testng.png'
import blazemeter from '../../Assets/skill-logos/blazemeter.png'

function page() {
  const skill_list = [
    {
      icon: java,
      skill: 'JAVA'
    },
    {
      icon: sql,
      skill: 'SQL'
    },
    {
      icon: appium,
      skill: 'Appium'
    },
    {
      icon: selenium,
      skill: 'SELENIUM'
    },
    {
      icon: testng,
      skill: 'TestNg'
    },
    {
      icon: git,
      skill: 'Git'
    },
    {
      icon: jenkins,
      skill: 'Jenkins'
    },
    {
      icon: jira,
      skill: 'Jira'
    },
    {
      icon: blazemeter,
      skill: 'Blazemeter'
    },
    {
      icon: jmeter,
      skill: 'Jmeter'
    },
    {
      icon: rpa,
      skill: 'RPA'
    },
  ];
  return (
    <>
      <Navbar />
      <div className={styles.about__container}>
        <Image
          src={about_image}
          className={styles.about__img}
          title={'customer'}
          alt="about-image"
        />
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
