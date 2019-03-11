const express = require('express')
const app = express()

var port = process.env.PORT || 3000 

app.use(express.json())

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

app.post('/chat', function (req, res) {
   	if(req.body.msg === "ville"){
   		console.log("Nous sommes à Paris")
   	}else if (req.body.msg === "météo") {
   		console.log("Il fait beau")
   	}
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))