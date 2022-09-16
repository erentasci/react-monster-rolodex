import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchedMonster, setSearchedMonster] = useState("");

  useEffect( () => {

     // Get data from endpoint
     fetch("https://jsonplaceholder.typicode.com/users")
        .then( (res) => res.json())
        .then( (data) => setMonsters(data) ); // Put users data to monsters state

  },[]); // When main component rendered run this

  //The value entered in the input is taken instantly
  const onSearchChange = (e) => {
      const searchedText = e.target.value.toLocaleLowerCase()
      setSearchedMonster(searchedText);
  }

  //Monsters are re-listed according to the search word
  const filteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchedMonster);
  } )



  return (
    <div className="container">
      
      <h1>Monster Rolodex</h1>

        <SearchBox
          onChange={onSearchChange}
        />

        <CardList
          monsters={filteredMonsters}
        />



    </div>
  );
}

export default App;
