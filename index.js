const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === "maria" && password === "silva75mariajp") {
    res.send({ message: 'sucesso' });
  } else {
    res.send({ message: 'falha' });
  }
});

app.post('/pagina2', (req, res) => {
  const { username, password } = req.body;

  if (username === "maria" && password === "silva75mariajp") {
    res.send({ message: 'sucesso' });
  } else {
    res.send({ message: 'falha' });
  }
});

app.listen(3000, () => {
  console.log("running");
});