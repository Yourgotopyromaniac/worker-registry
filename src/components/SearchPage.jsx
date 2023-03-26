import styles from '@/styles/Home.module.css'
import SearchButton from './SearchButton';
import SearchResultsModal from './SearchResultsModal';
import React, { useState } from 'react';
import Jane from '../images/singh.png'
import John from '../images/judge.png'
import Precious from '../images/precious.png'

const employees = [
    {
      id: 1,
      name: 'Jane Doe',
      jobTitle: 'Software Engineer',
      email: 'johndoe@company.com',
      phone: '123-456-7890',
      img : John
      
    },
    {
      id: 2,
      name: 'Jane Smith',
      jobTitle: 'Project Manager',
      email: 'janesmith@company.com',
      phone: '234-567-8901',
      img : Jane
      
    },

    {
      id: 3,
      name: 'Precious Jane',
      jobTitle: 'Product Designer',
      email: 'precious@spaceuniverse.africa',
      phone: '123-456-7890',
      img : Precious
      
    }
    // ... add more workers here
];

const SearchPage = ()=>{

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault();
    
    if (searchInput.trim() === ''){
      return;
    }
    const filteredEmployees = employees.filter(
        (employee) => employee.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        
    setSearchResults(filteredEmployees);
    setSearchInput('');
    setShowModal(true);

  }


  const handleCloseModal = () => {
    setShowModal(false);
  };

    return (
        <div className={styles.searchpage} id="search">
            <div className={styles.searchpageContainer}>
                <p className={styles.searchPageParagraph}>
                    Space Universe is a technology development/support company based in Lagos,
                    Nigeria. Our products and services cut across various sectors including gaming,
                    education and technical support.
                </p>

                <form className={styles.searchform} onSubmit={handleSearch}>
                     <input 
                      type="text"
                      id="searchInput"
                      value={searchInput}
                      onChange={(event)=> setSearchInput(event.target.value)}
                      placeholder="Who are you looking for?" />
                     <SearchButton/>
                </form>

                {showModal && (<SearchResultsModal searchResults={searchResults} onClose={handleCloseModal} />)}
            </div>
        </div>
    )

}

export default SearchPage;