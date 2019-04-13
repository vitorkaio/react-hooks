import React, { useState } from 'react';

const EntradaComponent = (props) => {

  const [entrada, setEntrada] = useState('');
  
  const onChangeHandler = (value) => {
    setEntrada(value);
  } 

  const submit = () => {
    props.adicionaItem(entrada);
    setEntrada('');
  }

  return (
    <div>
      <input placeholder="Digite algo..." onChange={(e) => onChangeHandler(e.target.value)} value={entrada} />
      <button onClick={submit}>Adicionar</button>
    </div>
  );
}

export default EntradaComponent;