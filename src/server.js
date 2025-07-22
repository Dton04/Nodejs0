require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const configviewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

//config view engine
configviewEngine(app);

//khai báo route
app.use('/', webRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

