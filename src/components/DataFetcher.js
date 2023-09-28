import { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetcher({ setCharacters }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/characters')
      .then((response) => {
        setData(response.data);
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

}

export default DataFetcher;
