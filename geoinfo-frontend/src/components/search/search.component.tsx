import { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearchLocation } from "react-icons/fa";

import styles from './search.module.css';
import { setSearchTerm } from '../../redux/actions/searchActions';



const Search = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    dispatch(setSearchTerm(newSearchTerm));
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSearchSubmit}>
      <input className={styles.searchBox} type='text' placeholder='Search...' name='search' onChange={handleSearchChange} />
      <button type='submit' className={styles.searchButton}>
        <FaSearchLocation />
      </button>
    </form>
  );
};

export default Search;