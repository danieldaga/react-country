import './App.css';
import CountriesList from './components/countriesList/CountriesList';
import CountryDetails from './components/countryDetails/CountryDetails';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';

const countriesAPI = 'https://ih-countries-api.herokuapp.com/countries'
function App() {

  const [countryJSON, setCountryJSON] = useState(null)
    
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
      <Routes>
        <Route path="/"
        element={ <CountriesList countryJSON={countryJSON}/>}/>
        <Route path="/:countryId"
        element={ <CountryDetails countryJSON={countryJSON}/>}/>
      </Routes>
    </div>
  ); 
}

export default App;
