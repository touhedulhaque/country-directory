import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() =>{
        const url = ('https://restcountries.eu/rest/v2/all');
        fetch(url)
        .then (res => res.json())
        .then (data => setCountries(data))
    },[])
    return (
        <div>
            <h1> Number of Countries: {countries.length}</h1>
            {
                countries.map(ct =><Country country={ct}></Country>)
            }
        </div>
    );
};

export default Home;