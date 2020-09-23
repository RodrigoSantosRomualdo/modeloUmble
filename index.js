const express = require("express");
const app = express();

app.get("/", function(req, res) {
  
  res.send("FUNCIONANDO");
})






var port = 3000;
app.listen(port);
console.log('Umbler - Express server started on port %s', port);