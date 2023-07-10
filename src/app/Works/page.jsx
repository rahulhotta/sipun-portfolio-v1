"use client";
import React, { useState } from "react";
import Navbar from "../../Components/navigation/Navbar";
import styles from "./Works.module.css";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

function page() {
  const [worksContent, setWorksContent] = useState(true);
  console.log(worksContent);
  const toggleWorksContent = (state) => {
    setWorksContent(state);
  };
  return (
    <>
      <Navbar />
      <div className={styles.works__page_container}>
        <img
          src="https://i.pinimg.com/originals/91/16/8b/91168b4873f6659b3e9fdfe4b89cd864.gif"
          className={styles.works__page_img}
        />
        <div className={styles.works__page_right}>
          <div className={styles.works__page_label_container}>
            <h1
              className={
                !worksContent
                  ? `${styles.works__page__label}`
                  : `${styles.works__page__label} ${styles.active}`
              }
              onClick={() => {
                toggleWorksContent(true);
              }}
            >
              Experience
            </h1>

            <h1
              className={
                worksContent
                  ? `${styles.works__page__label}`
                  : `${styles.works__page__label} ${styles.active}`
              }
              onClick={() => {
                toggleWorksContent(false);
              }}
            >
              Education
            </h1>
          </div>
          <div className={styles.works__page_right_content}>
            {worksContent ? <Experience /> : <Education />}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
