import './CountriesList.css'
import { Link } from "react-router-dom"

const CountriesList = (props) => {
const {countryJSON} = props


    return(
            countryJSON === null 
            ? <div>
                <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />
                <h1>Loading...</h1>
            </div>
            :    countryJSON && countryJSON.map((country)=>{
                    return(
                        <div className="col-5 countries" key={country.alpha3Code}>
                            <div className="list-group">
                                <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" key={country._id}>
                                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} /> <br />
                                    {country.name.common}
                                </Link>
                            </div>
                        </div>

                            )
                })
                
        
    )
}

export default CountriesList