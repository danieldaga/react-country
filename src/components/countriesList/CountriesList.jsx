import './CountriesList.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'

const countriesAPI = 'https://ih-countries-api.herokuapp.com/countries'
const CountriesList = () => {

    const [countryJSON, setCountryJSON] = useState([])
    
    useEffect(()=>{
        axios
        .get(countriesAPI)
        .then((response)=>{
            setCountryJSON(response.data)
        })

    },[])


    return(
        
                countryJSON && countryJSON.map((country)=>{
                    return( 
                        // <ul>
                        //     <Link to={`/${country.alpha3Code}`} key={country._id}>{country.name.common}</Link>
                        // </ul>
                        <div className="col-5 countries" key={country._id}>
                            <div className="list-group">
                                <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" key={country._id}>{country.name.common}</Link>
                            </div>
                        </div>

                            )
                })
                
        
    )
}

export default CountriesList