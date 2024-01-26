import React, { useState } from 'react';
import './index.css';
import AgeConverter from './Componentes/AgeConverter';
import DatePicker from './Componentes/DatePicker';
import Formulario from './Componentes/Formulario';
import ContadorDeClicks from './Componentes/contador';
import PokemonSearch from './Componentes/PokemonSearch';
import RickandMortySearch from './Componentes/RickandMortySearch';
//import SearchCountry from './Componentes/SearchCountry';
import Login from './Componentes/firebase/login';




function App() {
  const [showDate, setShowDate] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showClic, setShowClic] = useState(false);
  const [ShowAge,  setShowAge ] = useState(false); 
  const [ShowPokemon, setShowPokemon] = useState(false);
  const [ShowRick, setRick] = useState(false);
  const [ShowLogin, setLogin] = useState(false);

  return (

    <>
    <h1>  </h1>
    <div className='"button_top"> Button'>
      
      <button onClick={() => setShowDate(!showDate)}>
        {showDate ? 'Ocultar Fecha' : 'Mostrar Fecha'}
      </button>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>

      <button onClick={() => setShowClic(!showClic)}>
        {showClic ? 'Ocultar Contador' : 'Mostrar Contador'}
      </button>

      <button onClick={() => setShowAge(!ShowAge)}> 
        {ShowAge  ? 'Ocultar Edad' : 'Mostrar Edad' }
      </button>

      <button onClick={() => setShowPokemon(!ShowPokemon)}> 
        {ShowPokemon  ? 'Ocultar Pokemon' : 'Mostrar Pokemon' }
      </button>

      <button onClick={() => setRick(!ShowRick)}> 
        {ShowRick  ? 'Ocultar' : 'Mostrar Rick And Morty' }
      </button>
      
      <button onClick={() => setLogin(!ShowLogin)}>
        {ShowLogin ? 'Ocultar' : 'Mostrar Login'}
      </button>

      {showClic && <ContadorDeClicks />}
      {showDate && <DatePicker />}
      {showForm && <Formulario />}
      {ShowAge  && <AgeConverter/>}
      {ShowPokemon && <PokemonSearch/>}
      {ShowRick && <RickandMortySearch/>}
      {ShowLogin && <Login/>}

      
    </div>

    </>

    
  );
};

export default App;
