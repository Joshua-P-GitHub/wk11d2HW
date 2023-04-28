const express = require('express')





const app = express()

app.get('/', (req, res) => {
  res.send(`99 Bottles of beer on the wall<a href="http://localhost:3000/98"> take one down, pass it around</a>`)
})


app.get('/:number_of_bottles', (req, res) => {
  if (req.params.number_of_bottles == '0'){
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall<a href="http://localhost:3000/"> Start over </a>`)
  }
  res.send(`${req.params.number_of_bottles} Bottles of beer on the wall<a href="http://localhost:3000/${Number(req.params.number_of_bottles) - 1}"> take one down, pass it around</a>`)
})


app.listen(3000, function () {
  console.log('Listening on port 3000');
});