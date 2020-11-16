import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './button';
import Input from './input';
import List from './list';


function App() {

  const [Itens, setItens] = useState([]);
  const [inputData, setInputData] = useState("");


  function addItens () {
    setItens([...Itens, inputData]);
    setInputData("");
   }
   function inputDataChange (event) {
      setInputData(event.target.value);
    }
  return (
  <>
    <div>
      <Input change = {inputDataChange} />
      <Button click = {addItens} buttonName = 'add' />
    </div>
    <List itens = {Itens} />
  </>
  );
}

export default App;
