const express = require("express");
const app = express();
const handlebars = require('express-handlebars')


// Config
  // Template Engine"
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')

app.get("/", function(req, res) {
  
  res.render('teste');
})






var port = 3000;
app.listen(port);
console.log('Umbler - Express server started on port %s', port);