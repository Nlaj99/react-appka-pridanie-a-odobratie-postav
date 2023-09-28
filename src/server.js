const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  }));

app.get('/api/characters', (req, res) => {
  const characters = [
    {
      id: 1,
      who: "Finn",
      wat: "A silly kid",
      cool: 51
    },
    {
      id: 2,
      who: "Jake the Dog",
      wat: "Finn's best friend",
      cool: 12
    },
  ];
  res.json(characters);
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});