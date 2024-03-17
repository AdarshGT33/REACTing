const express = require('express')
const app = express()


app.get('/', function (req, res) {
  console.log("Server is Running...");
})

app.listen(3000)
console.log("Server running at http://localhost:3000/");