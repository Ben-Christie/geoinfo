import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from './landing.module.css';
import Card from "../../components/card/card.component";
import getAllCountries from "../../utilities/requests/getAllCountries.request";
import { Country } from "../../utilities/requests/getAllCountries.request";

const Landing = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  // get search term from redux store
  const searchTerm = useSelector((state: any) => state.search);

  useEffect(() => {
    // fetch data on initial mount
    const fetchData = async () => {
      try {
        const countriesData: Country[] = await getAllCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error('Error fetching data\n', error);
      }
    };

    fetchData();
  }, []);

  const alphabeticalSort = (a: Country, b: Country) => {
    const nameA = a.name.common;
    const nameB = b.name.common;

    if(nameA < nameB) {
      return -1;
    }

    if(nameA > nameB) {
      return 1;
    }

    return 0;
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={styles.landingContainer}>
      {filteredCountries.sort(alphabeticalSort).map((country) => {
        return <Card key={country.name.common} title={country.name.common} flag={country.flags.png} description={country.flags.alt} />
      })}
    </div>
  );
}

export default Landing;