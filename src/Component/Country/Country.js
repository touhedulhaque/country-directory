import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, region, flag } = props.country;
    const history = useHistory();
    const handleClick = (countryName) => {
        history.push(`/about/${countryName}`)
    }
    const countryStyle = {
        border: '5px solid purple',
        borderRadius: '20px',
        margin: '100px',
        padding: '10px'
    }
    const btnStyle = {
        width: '220px',
        height: '40px',
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        backgroundColor: '#FFD700',
        margin: '30px',
        textDecoration: 'none',
        borderRadius: '15px'
    }
    return (
        <div style={countryStyle}>
            <h2>Country: {name} </h2>
            <h4><Link to={`/about/${name}`}>Show Detail About: {name}</Link></h4>
            <h3>Capital: {capital}</h3>
            <p>Region: {region}</p>
            <img style={{ width: '100px' }} src={flag} alt="" /> <br />
            <p><Link to={`/about/${name}`}><button>Show Details</button></Link></p>
            <button style={btnStyle} onClick={() => handleClick(name)}> Click Me </button>
        </div>
    );
};

export default Country;