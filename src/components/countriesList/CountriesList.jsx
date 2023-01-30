import './CountriesList.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'

const countriesAPI = 'https://ih-countries-api.herokuapp.com/countries'
const CountriesList = () => {

    const [countryJSON, setCountryJSON] = useState({})
    
    useEffect(()=>{
        axios
        .get(countriesAPI)
        .then((response)=>{
            setCountryJSON(response.data)
        })
    },[])


    return(
        <ul>
            <Link>{countryJSON.name.common}</Link>
        </ul>
    )
}

export default CountriesList