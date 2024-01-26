import React from 'react';

const Tabla = () => {
  const data = [
    { id: 1, nombre: 'Ejemplo 1', descripcion: 'Descripción 1' },
    { id: 2, nombre: 'Ejemplo 2', descripcion: 'Descripción 2' },
    { id: 3, nombre: 'Ejemplo 3', descripcion: 'Descripción 3' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
