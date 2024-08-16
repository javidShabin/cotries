// URL of the API
const apiURL = 'https://restcountries.com/v3.1/all';

// Function to fetch country flags and names
async function getCountryFlagsAndNames() {
  try {
    const response = await fetch(apiURL);
    const countries = await response.json();

    const countriesContainer = document.getElementById('countries');

    // Loop through each country and create a card for it
    countries.forEach(country => {
      const countryCard = document.createElement('div');
      countryCard.classList.add('country-card');

      countryCard.innerHTML = `
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        <h2>${country.name.common}</h2>
      `;

      countriesContainer.appendChild(countryCard);
    });
  } catch (error) {
    console.error('Error fetching the country data:', error);
  }
}

// Call the function
getCountryFlagsAndNames();
