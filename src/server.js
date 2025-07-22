require('dotenv').config()

const express = require('express')
const path = require('path')


const app = express()
const port = process.env.PORT || 3000


//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static file
app.use(express.static(path.join(__dirname, 'public')))
//route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dat', (req, res) => {
  res.render('ex.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

