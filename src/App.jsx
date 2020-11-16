import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './button';
import Input from './input';
import List from './list';
import Header from './header';


function App() {
  const [Itens, setItens] = useState([]);
  const [inputData, setInputData] = useState("");


  function addItens () {
    setItens([...Itens, inputData]);
    setInputData("");
    console.log(inputData);
   }

   function removeItens (toBeDeleted) {
    const indexOfItemToBeDeleted = Itens.indexOf(toBeDeleted)
    Itens.splice(indexOfItemToBeDeleted, 1);
    setItens([...Itens]);
   }

   function inputDataChange (event) {
      setInputData(event.target.value);
    }
  return (
  <>
    <Header />
    <div>
      <Input change = {inputDataChange} />
      <Button click = {addItens} buttonName = 'add' />
    </div>
    <List itens = {Itens}  removeItens = {removeItens}/>
  </>
  );
}

export default App;
