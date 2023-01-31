import './CountryDetails.css'

const CountryDetails = (props) => {
    const {countryJSON} = props
    


    return(
        <div className="col-7">
            <h1>{countryJSON.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td className='td-boot'>Capital</td>
                    <td>{countryJSON.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                    {countryJSON.area} km
                    <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                    <ul>
                        <li><a href="/AND">Andorra</a></li>
                        
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
    )
}

export default CountryDetails