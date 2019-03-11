const express = require('express')
const app = express()
var port = process.env.PORT

app.get('/hello', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))