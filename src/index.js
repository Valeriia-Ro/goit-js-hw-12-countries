
import countryCardTpl from './fooditem.hbs';

import debounce from 'lodash.debounce';

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
  const markup = countryCardTpl(country);
  contryBody.innerHTML = markup;
}