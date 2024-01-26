import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');


  const limpiarCampo = () => {
    setNombre('');
    setEmail('');
  };

  return (
    <div>
      <h2>Formulario</h2>
      <label>
        Nombre:
        <input className='miInput' placeholder="Type"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input className='miInput' placeholder="Type"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {nombre && email && (
        <p>
          Datos del formulario: {nombre}, {email}
        </p>
      )}

         <button onClick={limpiarCampo}>Limpiar</button>
      
    </div>
  );
};

export default Formulario;
