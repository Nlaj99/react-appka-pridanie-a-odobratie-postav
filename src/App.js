import React, { useState, useRef, useEffect  } from 'react';
import './App.css';
import {ListOfDudes} from './components/listOfDudes';
import DataFetcher from './components/DataFetcher';

function App() {

  const [dude, setDude] = useState({ 
    name: "Marceline (postava)",
    wat: "A wild rocket girl (Popis postavy)" })
  const [characters, setCharacters] = useState([]);

  const inputRef = useRef(null);

  const handleWho = (event) => {
    const newName = event.target.value;
    setDude({ ...dude, name: newName });
  }

  const handleWhat = (event) => {
    const newDescription = event.target.value; 
    setDude({ ...dude, wat: newDescription });
  }

  const handleSubmit = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      
    const newDude = {
      id: characters.length + 1,
          who: dude.name,
          wat: dude.wat,
          cool: 15
    }

    setCharacters([...characters, newDude])
    setDude({ name: "", wat: "" });

    if (inputRef.current) {
      inputRef.current.focus();
    }
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <DataFetcher 
        characters={characters} 
        setCharacters={setCharacters}
        />
        <ListOfDudes 
        characters={characters} 
        setCharacters={setCharacters} />
          <form className="add-new" onKeyDown={handleSubmit}>
            <input 
            type="text" 
            placeholder="name"
            value={dude.name}
            onChange={handleWho}
            ref={inputRef}
            />

            <input 
            type="text" 
            placeholder="description"
            value={dude.wat}
            onChange={handleWhat}
            />
          </form>

          <p className="preview">{dude.name}
          <br />
          <small>{dude.wat}</small>
          
          </p>

        </div>
      </header>
    </div>
  );
}

export default App;
