import styles from '@/styles/Home.module.css'
import SearchButton from './SearchButton';
import SearchResultsModal from './SearchResultsModal';
import React, { useState } from 'react';
import Default from '../images/default.png'
import Biyi from '../images/biyi.png'
import Nnenna from '../images/nnenna.jpg'
import Precious from '../images/precious.png'
import Wale from '../images/wale.jpg'
import Mide from '../images/mide.png'
import Lanre from '../images/lanre.png'
import Hope from '../images/hope.jpg'
import Adams from '../images/adams.jpg'

const employees = [
    {
      id: 1,
      name: 'Tunji Idowu',
      jobTitle: 'CEO/Founder',
      email: 'tunji@spaceuniverse.africa',
      phone: '123-456-7890',
      img : Default
      
    },
    {
      id: 2,
      name: 'Biyi Akangbe',
      jobTitle: 'CTO',
      email: 'biyi@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Biyi
      
    },

    {
      id: 3,
      name: 'Nnenna Hunpatin',
      jobTitle: 'Operations and brand marketing',
      email: 'nnenna@communicationsarc.com',
      phone: '123-456-7890',
      img : Nnenna
    },

    {
      id: 4,
      name: 'Ayo',
      jobTitle: 'Senior Software Engineer',
      email: 'ayo@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
      
    },

    {
      id: 5,
      name: 'Ola Wale',
      jobTitle: 'Creative Lead',
      email: 'wale@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Wale
    },

    {
      id: 6,
      name: 'Hodo Irem',
      jobTitle: 'Head of Human Resources',
      email: 'hodo@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default 
    },

    {
      id: 7,
      name: 'Precious Etim',
      jobTitle: 'Product Designer',
      email: 'precious@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Precious
    },

    {
      id: 8,
      name: 'Hodo Irem',
      jobTitle: 'Head of Human Resources',
      email: 'hodo@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default 
    },

    {
      id: 9,
      name: 'Ayomide Pereao',
      jobTitle: 'Project Manager',
      email: 'mide.pereao@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Mide
    },

    {
      id: 10,
      name: 'Olanrewaju',
      jobTitle: 'UI/UX Designer',
      email: 'olanrewaju@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Lanre
    },

    {
      id: 11,
      name: 'Adams',
      jobTitle: 'Graphics Designer/Illustrator',
      email: 'olanrewaju@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Lanre
    },

    {
      id: 12,
      name: 'Awoyemi Abiola',
      jobTitle: 'Frontend Developer',
      email: 'abiola@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 13,
      name: 'Oyewole Oluwatobi',
      jobTitle: 'Frontend Developer',
      email: 'tobi@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 14,
      name: 'Mayowa Adebisi',
      jobTitle: 'Frontend Developer',
      email: 'mayowa@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 15,
      name: 'Abdulhameed Anofi',
      jobTitle: 'Backend Developer',
      email: 'abdulhameed@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 16,
      name: 'Matthew Kayode',
      jobTitle: 'Backend Developer',
      email: 'kayode@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 17,
      name: 'Hope Mgbebuihe',
      jobTitle: 'Sales Professional',
      email: 'hope.mgbebuihe@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Hope
    },

    {
      id: 18,
      name: 'Anjorin Molayo',
      jobTitle: 'Sales Professional',
      email: 'molayoanjorin@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 19,
      name: 'Damilola Ashipa',
      jobTitle: 'Sales Professional',
      email: 'damilola@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 20,
      name: 'Edidiong',
      jobTitle: 'Sales Professional',
      email: 'edidiong@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 20,
      name: 'Olamide Alaba',
      jobTitle: 'COO',
      email: 'olamide@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 21,
      name: 'Mercy Oluwatoba',
      jobTitle: 'Social Media Strategist',
      email: 'mercy@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 22,
      name: 'Tunde Alabi',
      jobTitle: 'Backend Developer',
      email: 'tunde@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },

    {
      id: 24,
      name: 'Chioma Opara',
      jobTitle: 'Mobile Developer Intern',
      email: 'chioma@spaceuniverse.africa',
      phone: '234-567-8901',
      img : Default
    },


];

const SearchPage = ()=>{

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault();
    
    const filteredEmployees = employees.filter(
      (employee) => employee.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    
      console.log("searchResults:", searchResults);
      console.log("filteredData:", filteredEmployees);
    if(filteredEmployees.length === 0)
    {
      setNoResults(true);
      setShowModal(true);
    }
    else if (searchInput.trim() === ''){
      return;
    }

    else {      
      setSearchResults(filteredEmployees);
      setSearchInput('');
      setShowModal(true);
      setNoResults(false)
    }


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

                {showModal && (<SearchResultsModal searchResults={searchResults} noResults={noResults} onClose={handleCloseModal} />)}
            </div>
        </div>
    )

}

export default SearchPage;