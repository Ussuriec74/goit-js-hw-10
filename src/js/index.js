import '../css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { countryСardMarkup } from './createMarkup';
import { countryListMarkup } from './createMarkup'

const DEBOUNCE_DELAY = 300;
const fetchCountriesInputRef = document.querySelector("#search-box");
const countryListRef = document.querySelector(".country-list");
const countryInfoRef = document.querySelector(".country-info");



fetchCountriesInputRef.addEventListener("input", debounce(onInputCountry, DEBOUNCE_DELAY));

function cleanMarkup(ref) {
  ref.innerHTML = "";
};

function onInputCountry() {
  const countryName = fetchCountriesInputRef.value;
  if (countryName === "") {
    cleanMarkup(countryListRef);
    cleanMarkup(countryInfoRef);
    return
  }

  fetchCountries(countryName).then((countries) => {
    if (countries.length > 10) {
      Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
      return
    } else if (countries.length === 1) {
      cleanMarkup(countryListRef);
      countryInfoRef.innerHTML = countryСardMarkup(countries[0]);
    } else {
      cleanMarkup(countryInfoRef);
      countryListRef.innerHTML = countries
        .map(country => countryListMarkup(country))
        .join("");
    }
  })
    .catch(error => {
      cleanMarkup(countryListRef);
      cleanMarkup(countryInfoRef);
      Notiflix.Notify.failure("Oops, there is no country with that name");
  });
}
