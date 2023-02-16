import React, { CSSProperties, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import api from "./api";
import { Countries as CountriesType } from "./api/types";
import Header from "./components/Header";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
const styles: CSSProperties  = { 
  display: 'flex',
  flexDirection: 'column', 
}

function App() {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState<Array<CountriesType>>([]);
  const [filteredCountries, setFilteredCountries] = useState<Array<CountriesType>>([]);
  
  useEffect(() => {
    api.getCountries().then(setCountries);
  }, []);

  useEffect(() => {
    setFilteredCountries(countries.filter(country => {
      const q = query.toLowerCase();
      if (
        country.name.common.toLowerCase().includes(q)
        || country.name.official.toLowerCase().includes(q)
        || country.region.toLowerCase().includes(q)
        || country.subregion?.toLowerCase().includes(q)
      ) {
        return true;
      }
      return false;
    }));
  }, [countries, query]);


  return ( 
    <div className="App" style={styles}>
      <Header setSearchQuery={setQuery} searchQuery={query} />
      <Routes>
        <Route path={"/"} element={<Countries countries={filteredCountries} query={query} />}/>
        <Route path={"/country/:id"} element={<Country countries={filteredCountries} />}/>
      </Routes>
    </div>
  );
}

export default App;
