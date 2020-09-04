import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState({})

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [countryName])

    const individualCountryStyle = {
        border: '20px solid salmon',
        borderRadius: '20px',
        margin: '100px',
        padding: '10px',
        fontWeight: 'bold',
        color: 'navy',
        background: 'linear-gradient(-100deg, yellow, grey)'
    }
    return (
        <div style={individualCountryStyle}>
            <h1>{country.name}</h1>
            <h2>Capital: {country.capital}</h2>
            <h3>Region: {country.region}</h3>
            <h4>Population: {country.population}</h4>
            <h5>Phone Calling Code: {country.callingCodes}</h5>
            <h6>Democratic Name: {country.demonym}</h6>
            <p><img style={{width: '200px'}} src={country.flag} alt="" /></p>
        </div>
    );
};

export default CountryDetail;