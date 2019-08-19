import React from 'react';

const ListaComponent = ({ lista }) => (
  <div>
    {
      lista.map((item) => <p key={item + Math.random() + Date.now()}>{item}</p>)
    }
  </div>
);
export default ListaComponent;
