import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api'
import styles from './countryPicker.module.css';
const CountryPicker = ({handleCountryChange}) => {
    
    const [countries,setCountries] = useState([]);

    useEffect(() => {
        const fetchedApi = async () => {
            setCountries(await fetchCountries());
        };
        fetchedApi();
    },[])

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
