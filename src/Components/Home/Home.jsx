import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import helloAnimation from "../../Assets/animations/hello-animation2.json";
import homeImage from "../../Assets/home_image-removebg.png";
// import homeImage from '../../Assets/home_image-removebg-preview.png';
import { useRouter } from "next/router";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineDownload,
  AiOutlineArrowRight,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Button from "../UI/Button/Button";

function Home() {
  const handleDownload = () => {
    const router = useRouter();
    const fileUrl = "../../Assets/Biswa_resume.pdf";
    router.push(fileUrl);
  };
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
        <p className={styles.home__desc}>
          Result focused and customer oriented Senior SDET with professional
          expertise in designing test strategy, test planning, estimation,
          leading testing effort for large/complex projects, also contributing
          in quality and design improvement of applications.
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1eQK5i4v--ujKhxHUn0JRkvOmSkatKgtu"
          download
        >
          <Button>
            Resume <AiOutlineDownload />
          </Button>
        </a>
        {/* <Button onClick={handleDownload}>
          Resume <AiOutlineDownload />
        </Button> */}

        <Button>
          <Link href="About" className={styles.home__link}>
            About <AiOutlineArrowRight className={styles.home__btn_icon} />
          </Link>
        </Button>
      </div>
      <div className={styles.home__right}>
        <a
          href="https://www.linkedin.com/in/biswa-mishra-90750421a/"
          target="_blank"
        >
          <button className={styles.home__icon_button}>
            <AiFillLinkedin />
          </button>
        </a>
        <a href="https://www.youtube.com/@automationpathsala" target="_blank">
          <button className={styles.home__icon_button}>
            <AiFillYoutube />
          </button>
        </a>
        <button className={styles.home__icon_button}>
          <AiFillGithub />
        </button>
        <div className={styles.vertical}></div>
      </div>
    </div>
  );
}

export default Home;
