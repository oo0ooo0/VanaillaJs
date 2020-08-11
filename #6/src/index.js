// <⚠️ DONT DELETE THIS ⚠️>
// import './styles.css';
// <⚠️ /DONT DELETE THIS ⚠️>
const selectElement = document.querySelector('.country');
const COUNTRY_LS = 'country';

function saveCountry(country) {
  localStorage.setItem(COUNTRY_LS, country);
}

function init() {
  const localStorageCountry = localStorage.getItem(COUNTRY_LS),
    options = selectElement.options;

  for (const i in options) {
    if (localStorageCountry === options[i].value) {
      options[i].selected = 'true';
      break;
    }
  }
}

selectElement.addEventListener('change', (event) => {
  const selectedCountry = event.target.value;

  saveCountry(selectedCountry);
});

init();
