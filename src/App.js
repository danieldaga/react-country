import './App.css';
import CountriesList from './components/countriesList/CountriesList';
import CountryDetails from './components/countryDetails/CountryDetails';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react'
import axios from 'axios'

const countriesAPI = 'https://ih-countries-api.herokuapp.com/countries'
function App() {

  const [countryJSON, setCountryJSON] = useState([])
    
    useEffect(()=>{
        axios
        .get(countriesAPI)
        .then((response)=>{
            setCountryJSON(response.data)
        })

    },[])


  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <CountryDetails />
    </div>
  );
}

export default App;
