const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')

const app = express()
const upload = multer()

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(upload.array())


app.get('/', (request, response) => {
  return response.render('form')
})

app.post('/form', (request, response) => {
  const formInfo = (request.body)
  // We're going to hard code dummy data just to have something to present. 

  formInfo.exitCostTotalCost = formInfo.annualSal + 100000 // need to pasre all form info before using

  return response.render('formResult', formInfo)
})


app.listen(5000, () => {
  console.log('Listening on port 5000...') // eslint-disable-line no-console
})
