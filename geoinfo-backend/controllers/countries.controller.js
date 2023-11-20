const axios = require('axios');

async function getAllCountries(req, res) {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all', {
      params: {
        fields: 'name,flags',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching countries:\n', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  getAllCountries,
};
