import React from "react";
import styles from "./Experience.module.css";
import Button from "@/Components/UI/Button/Button";
const company = [
  {
    name: "GOJEK",
    duration: "NOV 2021 - PRESENT",
    role: "Senior SDET",
    skillsInvolved: ["Api automation", "feature designing", "Test case authoring", "Functional Integration", "Performance Testing","Load Testing","Stress Testing"],
  },
  {
    name: "Automation Anywhere",
    duration: "Feb 2020 - NOV 2021",
    role: "Senior SDET",
    skillsInvolved: ["Api automation", "feature designing", "Test case authoring", "Functional Integration", "Performance Testing","Load Testing","Stress Testing","Mentoring team","Release planning","Test Stratergies and Coverages", "Testing RPA"],
  },
  {
    name: "Quikr India Pvt Ltd",
    duration: "DEC 2016 - FEB 2020",
    role: "Senior SDET",
    skillsInvolved: ["Api automation", "feature designing", "Test case authoring", "Functional Integration", "Performance Testing","Load Testing","Stress Testing","Mentoring team","Release planning","Test Stratergies and Coverages"],
  },
  {
    name: "Exilant Technologies",
    duration: "DEC 2015 - DEC 2016",
    role: "Senior SDET",
    skillsInvolved: ["Automating Beats webapp", "Testing using AEM", "Verifying AEM tool", "Validating wireframe"],
  },
  {
    name: "Phonton Interactive Pvt Ltd",
    duration: "JUNE 2014 - DEC 2015",
    role: "QA Engineer",
    skillsInvolved: ["nothing"],
  },
];


function Experience() {
  return <div className={styles.experience__container}>
    {company.map((company)=>{
      return (
        <div className={styles.experience__card} key={company.name}> 
          <div className={styles.experience__card_left}>
          <h2 className={styles.experience__card_name}>
              {company.name}
            </h2>
            <p className={styles.experience__card_duration}>{company.duration}</p>
          </div>
          <div className={styles.experience__card_right}>
           
            <p className={styles.experience__card_role}>
              {company.role}
            </p>
            <h3>Skills Involved</h3>
            <p className={styles.experience__card_skills_container}>
              {company.skillsInvolved.map((skill)=>{
                return <Button>{skill}</Button>
              })}
            </p>
          </div>
        </div>
      )
    })}
  </div>;
}

export default Experience;
