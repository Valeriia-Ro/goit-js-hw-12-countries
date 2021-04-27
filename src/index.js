
import countryCardTpl from './fooditem.hbs';
import list from './list.hbs';

import debounce from 'lodash.debounce';

import errorMessage from './error.js';

import fetchCountries from '../src/fetchCountries.js';

const contryBody = document.querySelector('.country-body');
const searchCountry = document.querySelector('.search-input');

searchCountry.addEventListener('input',debounce(onSearch,500));

function onSearch (e) {
  e.preventDefault();
  
  const value = searchCountry.value;
  
  console.log(value);
  
  fetchCountries(value)
    .then(renderContryCard)
    .catch(error => console.log(error));
}


function renderContryCard (country) {
  if (country.length === 1) {
  const markup = countryCardTpl(country);
  contryBody.innerHTML = markup;
} else if (country.length >= 10)  {
  errorMessage();
} else {
  const markup = list(country);
  contryBody.innerHTML = markup;
}
}