import React, { useState, useEffect, useCallback } from 'react';
import { produce } from 'immer';
import EntradaComponent from './components/entrada/Entrada';
import ListaComponent from './components/lista/Lista';

import './App.css';

const App = () => {
  const [lista, setLista] = useState([]);

  const adicionaItem = (item) => {
    setLista(produce(lista, (draft) => {
      draft.push(item);
    }));
  };

  // Filtra a lista, todas as palavras começadas com são excluídas
  const removeWordWithA = useCallback(() => {
    setLista(produce(lista, (draft) => {
      for (let index = 0; index < lista.length; index += 1) {
        if (lista[index][0] === 'a') {
          draft.splice(index, 1);
        }
      }
    }));
  }, [lista]);

  // Similar to componentDidMount:
  /* useEffect(() => {
    console.log('Montado');
  }, []) */

  // Similar to componentDidUpdate
  /* useEffect(() => {
    console.log('Atualizado');
  }) */

  // Similar to componentWillUnmount
  /* useEffect(() => {
    return () => {
      console.log('Desmontado');
    }
  }, []) */

  // Será executado sempre que a lista for atualizada.
  useEffect(() => {
    removeWordWithA();
    // eslint-disable-next-line no-console
    console.log(lista);
  }, [lista, removeWordWithA]);

  return (
    <div className="App">
      <EntradaComponent adicionaItem={adicionaItem} />
      <ListaComponent lista={lista} />
    </div>
  );
};

export default App;
