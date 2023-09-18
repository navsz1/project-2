const express = require('express');
const app = express();
const PORT =process.env.PORT || 3001;

app.use(express.static('public'))
app.get('/', function (req, res) {
    res.send('Hello World')
  });
  
  app.listen(PORT)