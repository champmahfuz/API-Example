const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name.official}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name.name}')">Details</button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name.official;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);

    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

const displayCountryDetail = country => {
    console.log(country);
}