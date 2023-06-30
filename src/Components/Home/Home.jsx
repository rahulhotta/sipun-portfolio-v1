import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
// import BiswaResume from '../../Assets/Biswa_resume.pdf';
import useDownloader from "react-use-downloader";
import HelloGif from "../../Assets/hello2-unscreen.gif";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineDownload,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Button from "../UI/Button/Button";
function Home() {
  const { download } = useDownloader();
  const fileUrl = "../../Assets/Biswa_resume.pdf";
  const filename = "File.pdf";
  return (
    <div className={styles.home__container}>
      <div className={styles.home__left}>
        {/* <img
          src="https://drive.google.com/uc?id=1DexoHhxhafKTEHp-T_G2awXx1kYEtaWw"
          alt="hello"
          width="400"
          height="400"
          className={styles.hello__img}
        /> */}

        <h1>Hi I am</h1>
        <h1 className={styles.home__name}>Rahul Kumar Hotta</h1>
        <h1>Web Developer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas
          adipisci excepturi molestias asperiores fuga nemo, eum quos vero vel
          tenetur dolorem ea quod sit voluptates incidunt necessitatibus quidem?
          Eaque possimus nam commodi exercitationem?
        </p>
        <a>
          <Button>
            Resume <AiOutlineDownload />
          </Button>
        </a>
        <Button>
          {" "}
          <Link href="About" className={styles.home__link}>
            About <AiOutlineArrowRight />
          </Link>{" "}
        </Button>
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
