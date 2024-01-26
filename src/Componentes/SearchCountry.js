// CountrySearch.js
import React, { useState } from 'react';
import axios from 'axios';

const CountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/translation/${searchTerm}`);
      const firstCountry = response.data[0];

      if (firstCountry) {
        const commonName = firstCountry.name.common || 'Nombre común no disponible';
        const officialName = firstCountry.name.official || 'Nombre oficial no disponible';
        const flagUrl = firstCountry.flags?.svg || 'URL de la bandera no disponible';

        
        setCountryData({ commonName, officialName, flagUrl  });
        setError(null);
      } else {
        setCountryData(null);
        setError('País no encontrado');
      }
    } catch (error) {
      console.error('Error al buscar el país:', error.message);
      setCountryData(null);
      setError('Error al buscar el país');
    }
  };

  return (
    <div>
      <label>
        Nombre del País:
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Buscar</button>

      {countryData && (
        <div>
          <h2>Nombre Común: {countryData.commonName}</h2>
          <h3>Nombre Oficial: {countryData.officialName}</h3>
          <img src={countryData.flagUrl} alt={`Bandera de ${countryData.commonName}`} />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CountrySearch;
