import React, { useState } from 'react';
import axios from 'axios';

function RickAndMorty() {
    const [characterName, setCharacterName] = useState('');
    const [characterImage, setCharacterImage] = useState('');
   
  
 

  

    const handleSearch = () => {
        axios
          .get(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
          
          .then(response => {
           
            
            // Verifica si se encontraron resultados
            if (response.data.results.length > 0) {

             
              // Obtiene la URL de la imagen del primer resultado
              const imageUrl = response.data.results[0].image;
              setCharacterImage(imageUrl);
            } else {
              // Si no se encuentra el personaje, puedes manejarlo aquí
              console.log('Personaje no encontrado');
              setCharacterImage('');
            }
          })
          .catch(error => {
            console.error('Error al obtener datos del API', error);
          });
      };



      
      return (
        <div>
            <input
                type="text"
                placeholder="Nombre del personaje"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
           
            {characterImage && <img src={characterImage} alt="Personaje" />}

            
                   

           
        </div>

      
    );
      }

      export default RickAndMorty;
    