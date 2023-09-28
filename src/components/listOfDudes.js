import React from 'react';

export function ListOfDudes({ characters, setCharacters }) {
  const handleCool = (dude, event) => {
    const cool = +event.target.value;
    const updatedCharacters = characters.map((item) =>
      item === dude ? { ...item, cool: cool } : item
    );
    setCharacters(updatedCharacters);
  };

  const removeDude = (dude) => {
    const removeCharacters = characters.filter((item) => item !== dude);
    setCharacters(removeCharacters);
  };

    return (
      characters.map((characters) => (
      <li 
      className="dude"
      key={characters.id}
      >
        <button className="ctrl" onClick={() => removeDude(characters)}>x</button>
        
        <article className={
          characters.cool < 10 ? 'faded' : characters.cool > 50 ? 'gold' : ''
        }>
        {characters.who}

        <span>{characters.wat}</span>

        </article>
    
      <input 
      className="ctrl" 
      type="number" 
      value={characters.cool} 
      onChange={(event) => handleCool(characters, event)}
      />
        </li>
  ))
    )
      }