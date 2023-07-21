import React, {Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';
import Styles from './CountryG.module.css';
import axios from 'axios';

export const CountryG = () => {

    // to catch value from input        (1)
    const [value, setValue] = useState('');

    const [country, setCountry] = useState();
    const [loading, setLoading] = useState(false)
    // const api_url = `https://restcountries.com/v3.1/name/${setValue}?fullText=true`;

    const handleValue = async () => {
        setLoading(true);
        const response = await axios.get(`https://restcountries.com/v3.1/name/${value}`);
        setLoading(false);
        setCountry(response.data[0])

        console.log(response.data[0]);

    }

    return <Fragment>
        <div className ={Styles.mainDesign} >
            <div className={Styles}>

                {/* 2 put value in input */}
                <input value={value} onChange={(e) => setValue(e.target.value)} required id="country-inp" type="text" placeholder="Enter Country..." className="form-control" />
                <button onClick={handleValue} id="search-btn" type="button" className="btn btn-outline-success mt-3 w-100">Search</button>
            </div>
  
        </div>

        {country && !loading && (
            <div id="result"  className ={Styles.result}>
                <img src={country.flags.svg} className={Styles.flagImg} alt="flag-img" />
            <h3 className={Styles.text}>
                <span>Capital</span>: {country.capital[0]}
            </h3>
            <p>
                <span>Population</span>: {country.population}
            </p>
            <p>
                <span>Humans</span>: {country.altSpellings[1]}
            </p>
            <p>
                {/* <span>Currencies</span>: {country.currencies.EGP} */}
            </p>
            <p>
                {/* <span>Currencies</span>: {country.postalCode[0].region} */}
            </p>
            <p>
                <span>continents </span>: {country.continents[0]}
            </p>

            {loading && <h2 className='loading'>Loading</h2>}


        </div>

        )}

        




    </Fragment>
};

