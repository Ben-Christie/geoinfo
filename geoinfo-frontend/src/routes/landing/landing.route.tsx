import React from "react";
import { useSelector } from "react-redux";

import styles from './landing.module.css';
import Card from "../../components/card/card.component";

const Landing = () => {
  const countries = [
    'Turkmenistan',
    'North Macedonia',
    'Australia',
    'United States of America',
    'Switzerland',
    'Republic of Ireland'
  ];

  // get search term from redux store
  const searchTerm = useSelector((state: any) => state.search);

  const filteredCountries = countries.filter((country) => {
    return country.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.landingContainer}>
      {filteredCountries.map((country) => {
        return <Card key={country} title={country} />
      })}
    </div>
  );
}

export default Landing;