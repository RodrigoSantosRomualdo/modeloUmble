const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const speedapi = require("./service/speedapi")
const bodyParser = require('body-parser')
const path = require("path")



// Config
  // Template Engine"
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')

  // Body Parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())

  //Public
  app.use(express.static(path.join(__dirname,"public")))

app.get("/", function(req, res) {
  download = 0, ping = 0, upload = 0;
  download = download.toFixed(2)
  ping = ping.toFixed(2)
  upload = upload.toFixed(2)
  var objeto = {
    download: download,
    ping: ping,
    upload: upload
  
  }

  res.render('teste', {download: objeto.download,upload: objeto.upload, ping: objeto.ping});
    
})


app.post('/', function(req, res) {
  
  var dados = speedapi()
  dados.then(dadorecebido => {
    console.log(dadorecebido)
    dadosApi = JSON.stringify(dadorecebido);
    isp = dadosApi;
    var objeto = {
      nome: "DADO DA VELOCIDADE DA SUA INTERNET",
      ping: (parseFloat(dadorecebido.ping.latency).toFixed(2)),
      download: (parseFloat(dadorecebido.download.bandwidth / 125000).toFixed(2)),
      upload: (parseFloat(dadorecebido.upload.bandwidth / 125000).toFixed(2)),
      ip :  dadorecebido.interface.externalIp,
      operadora: dadorecebido.isp
    }

    res.render('teste', {dadosApi: objeto.nome, download: objeto.download, upload: objeto.upload, 
      ping: objeto.ping, ip: objeto.ip, operadora: objeto.operadora   })
    
  })
});





var port = 3000;
app.listen(port);
console.log('Umbler - Express server started on port %s', port);