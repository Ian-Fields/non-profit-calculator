const express = require('express')

const app = express()

// app.set('view engine', 'html')

app.use(express.static('public'))


app.get('/', (request, response) => {
  return response.render('index')
})

app.listen(3000, () => {
  console.log('Listening on port 3000...') // eslint-disable-line no-console
})
