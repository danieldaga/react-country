import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './CountryDetails.css'

const CountryDetails = (props) => { 
    const {countryJSON} = props   
    const [foundCountry, setFoundCountry] = useState(null);

    const { countryId } = useParams();

    useEffect(() => {
        const country = countryJSON.find((oneCountry) => {
        
            return oneCountry.alpha3Code === countryId;
        })
    if (country) {
        setFoundCountry(country);
    }
    
    }, [countryId, countryJSON]);

    return(
        <div>
            {foundCountry === null
            ? "loading...."
            : foundCountry && (<div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td className='td-boot'>Capital</td>
                    <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                    {foundCountry.area} km
                    <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                    {foundCountry.borders.map((borderCountry)=>{
                        return (
                            <Link to={`/${borderCountry}`}><div>{borderCountry}</div></Link>
                        )
                    })}
                    </td>
                </tr>
                </tbody>
            </table>
            </div>)}
        </div>
    )
}

export default CountryDetails