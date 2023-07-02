import React from 'react';
import styles from './Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';
import useDownloader from 'react-use-downloader';
import HelloGif from '../../Assets/hello2-unscreen.gif';
import helloAnimation from '../../Assets/Animations/hello-animation2.json';
import homeImage from '../../Assets/home_image.png';
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineDownload,
  AiOutlineArrowRight
} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Button from '../UI/Button/Button';

function Home() {
  return (
    <div className={styles.home__container}>
      <Image
        src={homeImage}
        title="tester"
        alt="home_img"
        className={styles.home__tester__image}
      />
      <div className={styles.home__left}>
        {/* <img
          src="https://drive.google.com/uc?id=1DexoHhxhafKTEHp-T_G2awXx1kYEtaWw"
          alt="hello"
          width="400"
          height="400"
          className={styles.hello__img}
        /> */}

        <h1 className={styles.home__left__heading}>
          Hi
          <Lottie
            animationData={helloAnimation}
            className={styles.home__animation}
          />
          I am
        </h1>
        <h1 className={styles.home__name}>Biswa Bhusan Mishra</h1>
        <h1>Automation Engineer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas
          adipisci excepturi molestias asperiores fuga nemo, eum quos vero vel
          tenetur dolorem ea quod sit voluptates incidunt necessitatibus quidem?
          Eaque possimus nam commodi exercitationem?
        </p>

        <a href="assets/Biswa_resume.pdf" download>
          <Button>
            Resume <AiOutlineDownload />
          </Button>
        </a>

        <Button>
          <Link href="About" className={styles.home__link}>
            About <AiOutlineArrowRight className={styles.home__btn_icon}/>
          </Link>
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
