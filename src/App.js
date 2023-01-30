import './App.css';
import CountriesList from './components/countriesList/CountriesList';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
    </div>
  );
}

export default App;
