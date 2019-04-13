import React from 'react';

const ListaComponent = (props) => {
  return (
    <div>
      {
        props.lista.map(item => {
          return <p key={item}>{item}</p>
        })
      }
    </div>
  );
}

export default ListaComponent;