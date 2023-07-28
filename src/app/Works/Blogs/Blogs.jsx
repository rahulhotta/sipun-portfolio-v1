import React from "react";
import styles from "./Blogs.module.css";
import youtubeImage from "../../../Assets/Blogs/youtube.png";
import topmateImage from "../../../Assets/Blogs/topmate.png";
import mediumImage from "../../../Assets/Blogs/medium.png";
import linkedInImage from "../../../Assets/Blogs/linked_in.png";
import Image from "next/image";
function Education() {
  const blogList = [
    {
      img: mediumImage,
      name: "medium",
      link: "https://medium.com/@mishra.biswa20",
    },
    {
      img: youtubeImage,
      name: "Youtube",
      link: "https://www.youtube.com/@automationpathsala",
    },
    {
      img: linkedInImage,
      name: "Linked In",
      link: "https://www.linkedin.com/in/biswa-mishra-90750421a/",
    },
    {
      img: topmateImage,
      name: "topmate",
      link: "https://topmate.io/biswa_mishra",
    },
  ];
  return (
    <div className={styles.blogs__container}>
      {blogList.map((blog) => {
        return (
          <a href={blog.link} target="_blank" className={styles.blogs__card}>
            <div >
              <Image
                src={blog.img}
                alt="blog"
                className={styles.blogs__image}
              />
              <h2 className={styles.blog__name}>{blog.name}</h2>
              {/* <a href={blog.link} target="_blank">Visit</a> */}
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Education;
