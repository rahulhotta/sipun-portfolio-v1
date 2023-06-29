import React from "react";
import styles from "./Home.module.css";
import HelloGif from "../../../public/Assets/Hello.gif";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineDownload,
  AiOutlineArrowRight
} from "react-icons/ai";
import {BsFacebook} from 'react-icons/bs'
import Button from "../UI/Button/Button";
function Home() {
  return (
    <div className={styles.home__container}>
      <div className={styles.home__left}>
        {/* <img
          src="https://i.pinimg.com/originals/28/77/50/2877508c5933fa5eee1256dcfdbc9a42.gif"
          alt="hello"
          className={styles.hello__img}
        /> */}
        <h1>Hello I am</h1>
        <h1 className={styles.home__name}>Rahul Kumar Hotta</h1>
        <h1>Web Developer</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas adipisci excepturi molestias asperiores fuga nemo, eum quos vero vel tenetur dolorem ea quod sit voluptates incidunt necessitatibus quidem? Eaque possimus nam commodi exercitationem?</p>
        <Button >Resume <AiOutlineDownload/></Button>
        <Button >About <AiOutlineArrowRight/></Button>
      </div>
      <div className={styles.home__right}>
        <button className={styles.home__icon_button}>
          <AiFillLinkedin />
        </button>
        <button className={styles.home__icon_button}>
          <BsFacebook />
        </button>
        <button className={styles.home__icon_button}>
          <AiFillInstagram />
        </button>
        <button className={styles.home__icon_button}>
          <AiFillTwitterCircle />
        </button>
        <button className={styles.home__icon_button}>
          <AiFillGithub />
        </button>
        <div className={styles.vertical}></div>
      </div>
    </div>
  );
}

export default Home;
