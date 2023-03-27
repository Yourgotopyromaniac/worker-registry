import React from 'react';
import Image from 'next/image';
import FourOhFour from "../images/404.gif"
import styles from '@/styles/Home.module.css'


function SearchResultsModal(props) {
  const { searchResults, onClose, noResults } = props;

  return (

    <div className={styles.modalBody}>
      <div className={styles.blurMask}/>
      <div className={styles.modalContent}>
      <span className={styles.closeButton} onClick={onClose}>&times;</span>

        { noResults ? ( 
        
        <div className={styles.NoEmployeeFound}>
          <h4 className={styles.errorText}>Oops! No one with that name was found :( </h4>
            <Image
            src={FourOhFour}
            alt="no names found illustration"
            />
        </div>
        
        ) : (
          
        searchResults.map((employee) => (

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
            </div>

          </div>
          )))
          }
      </div>
    </div>
  );
}

export default SearchResultsModal;