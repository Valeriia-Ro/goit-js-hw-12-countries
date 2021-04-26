
export default function fetchCountries() {
    return fetch('https://restcountries.eu/rest/v2/name/eesti').then(response => {
        return response.json()
    })
}