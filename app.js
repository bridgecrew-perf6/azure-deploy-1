const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello world!... Hello world 2nd commit'))
app.listen(80)