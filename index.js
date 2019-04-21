const express = require('express')
const app = express()
//================================================================================
const port = 4000
app.listen(port , () => console.log(`Server berjalan di port ${port}`))
//================================================================================
const bodyParser = require('body-parser')
app.use(bodyParser.json())
//================================================================================
const cors = require('cors')
app.use(cors())
//================================================================================
app.get('/' , (req,res) => {
    res.send(`<h1>Selamat datang di API</h1>`)
})
//================================================================================
const titanicRouter1 = require('./router/titanicRouter1')
app.use('/titanic1' , titanicRouter1)
//================================================================================
const titanicRouter2 = require('./router/titanicRouter2')
app.use('/titanic2' , titanicRouter2)