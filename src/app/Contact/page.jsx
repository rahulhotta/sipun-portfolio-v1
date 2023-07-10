import React from 'react';
import styles from './Contact.module.css'
import Navbar from '../../Components/navigation/Navbar';
import contactImg from '../../Assets/contacts_image.jpg'
function page() {
  return (
    <div className={styles.contact__page_container}>
      <Navbar />
      
    </div>
  );
}

export default page;
