const countryСardMarkup = ({ flags, name, capital, population, languages }) => {
  return `
    <div class="country-info__wrapper">
      <img class="country-info__flags" src="${flags.svg}" alt="${name.official}" width="50" />
      <h2 class="country-info__name">${name.official}</h2>
    </div>
    <p><b>Capital:  </b>${capital}</p>
    <p><b>Population:  </b>${population}</p>
    <p><b>Languages:  </b>${Object.values(languages)}</p>
  `;
};

const countryListMarkup = ({ flags, name }) => {
  return `
      <li class="country-list__item">
        <img class="country-list__flags" src="${flags.svg}" alt="${name.official}" width="30" height="20" />
        <h2 class="country-list__name">${name.official}</h2>
      </li >
      `;
};

export { countryСardMarkup, countryListMarkup }