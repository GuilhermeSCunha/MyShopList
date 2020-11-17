import React, { useState } from 'react';
import Button from './button';
import Input from './input';
import List from './list';
import Header from './header';
import Counter from './counter'


function App() {
  const [Itens, setItens] = useState([]);
  const [inputData, setInputData] = useState("");
  const [numberOfItens, setNumberOfItens] = useState(0);

  function addItens () {
    setItens([...Itens, inputData]);
    setInputData("");
    setNumberOfItens(numberOfItens + 1);
   }

   function removeItens (toBeDeleted) {
    const indexOfItemToBeDeleted = Itens.indexOf(toBeDeleted);
    Itens.splice(indexOfItemToBeDeleted, 1);
    setItens([...Itens]);
    setNumberOfItens(numberOfItens - 1);
   }

   function editItens (toBeEdited) {
    const indexOfItemToBeDEdited = Itens.indexOf(toBeEdited);
    Itens.splice(indexOfItemToBeDEdited, 1, inputData);
    setInputData("");
   }

   function inputDataChange (event) {
      setInputData(event.target.value);
    }
  return (
  <>
    <Header />
    <div>
      <Input change = {inputDataChange} data = {inputData} />
      <Button click = {addItens} buttonName = 'add' />
    </div>
    <div>
      <List itens = {Itens}  removeItens = {removeItens} editItens = {editItens}/>
    </div>
    <Counter numberOfItens = {numberOfItens}/>
  </>
  );
}

export default App;
