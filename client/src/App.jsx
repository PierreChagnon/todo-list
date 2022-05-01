import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Pannel from './components/Pannel';
import { useEffect, useState } from 'react';

import axios from "axios";

function App() {
  //state liste des tâches
  const [tasks, setTasks] = useState([{ name: 'Coiffeur', status: 'A faire', deadline: new Date(2018, 8, 22) }, { name: 'Sortir le chien', status: 'Fait', deadline: new Date(2018, 8, 22) }])
  //filtre de recherche
  const [listFiltered, setListFiltered] = useState([])
  const [filter, setFilter] = useState('')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (listFiltered.length === 0) {
      setListFiltered(tasks)
    }
  }, [tasks])


  //AXIOS
  const handleData = async () => {
    await axios.get("http://localgost:8000/getData").then((res) => {
      console.log("RESPONSE : ", res);
      //setTasks(res.data);
    })
  }


  //Ajoute une tâche a la liste
  const addClickHandler = () => {
    
    setTasks([...tasks, { name: '', status: 'A faire' }])
    handleData();
  }



  //Efface la tâche
  const handleRemove = (index) => {
    const list = [...tasks];
    list.splice(index, 1);
    setTasks(list);
  };

  //Modifie le nom de la tâche
  const handleInputChange = (i, value) => {
    console.log(i, value)
    const list = [...tasks]
    list[i].name = value
    setTasks(list)
  }

  //Filtre du champ "recherche"
  const handleSearchInputChange = (value) => {
    setInputValue(value)
  }

  //Click boutton recherche
  const handleSearchClick = () => {
    setFilter(inputValue)
  }

  //Edit status
  const editStatus = (tasks) => {
    //setTasks(tasks)
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Searchbar handleSearchInputChange={handleSearchInputChange} handleSearchClick={handleSearchClick} />
        <Pannel
          addClickHandler={addClickHandler}
          handleRemove={handleRemove}
          handleInputChange={handleInputChange}
          tasks={tasks}
          filter={filter}
          editStatus={editStatus} />
      </div>
    </div>
  );
}

export default App;
