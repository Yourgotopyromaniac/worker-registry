import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'


function SearchResultsModal(props) {
  const { searchResults, onClose } = props;

  return (

    <div className={styles.modalBody}>
      <div className={styles.blurMask}/>
      <div className={styles.modalContent}>
      <span className={styles.closeButton} onClick={onClose}>&times;</span>
        {searchResults.map((employee) => (

          <div className={styles.employeeDetailsContainer} key={employee.id}>

            <div className={styles.employeeImageContainer}>
              <div className={styles.topBorder}/>
              <div className={styles.bottomBorder}/>
              <Image
                src={employee.img}
                alt="employee image"
              />
            </div>
            <div className={styles.employeeDetails}>
                <h3>{employee.name}</h3>
                <p>Role : {employee.jobTitle}</p>
                <p>Email : {employee.email}</p>
                <p>Phone : {employee.phone}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsModal;