const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.get('/', (req, res) => res.json({data: 'React frontend with node backend. Hello world'}))
app.listen(80)