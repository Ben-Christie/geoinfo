import axios from 'axios';

export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [langCode: string]: {
        official: string;
        common: string;
      };
    };
  };
}

const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get('http://localhost:8000/countries');
    console.log('Data in frontend:', response.data);
    return response.data as Country[];
  } catch (error) {
    console.error('Error fetching data from server request\n', error);
    throw error;
  }
};

export default getAllCountries;