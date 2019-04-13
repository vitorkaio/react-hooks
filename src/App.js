import React, {useState, useEffect} from 'react';
import EntradaComponent from './components/entrada/Entrada.jsx';
import ListaComponent from './components/lista/Lista.jsx';

import './App.css';

const App = () => {

  const [lista, setLista] = useState([]);

  const adicionaItem = (item) => {
    setLista([...lista, item]);
  }

  // Similar to componentDidMount:
  useEffect(() => {
    console.log('Montado');
  }, [])

  // Similar to componentDidUpdate
  useEffect(() => {
    console.log('Atualizado');
  })

  // Similar to componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Desmontado');
    }
  }, [])

  // Será executado sempre que a lista for atualizada.
  useEffect(() => {
    console.log(lista);
  }, [lista]);

  return (
    <div className="App">
      <EntradaComponent adicionaItem={adicionaItem} />
      <ListaComponent lista={lista} />
    </div>
  );
}

export default App;
