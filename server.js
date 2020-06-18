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

  console.log(request.body)

  // We're going to hard code dummy data just to have something to present. 

  const annSalary = parseInt(formInfo.annualSal)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  let totalExitCost = annSalary + 4154 + 2000 + 4873
  let totalRecruitingCost = 31733 + 4180 + 41238 + 6758
  let totalOnboardingCost = 1000 + 3000 + 2219
  let totalLossCost = totalExitCost + totalRecruitingCost + totalOnboardingCost
  let totalProgramCost = 21310
  let totalSavings = totalLossCost - totalProgramCost

  formInfo.totalExitCost = formatter.format(totalExitCost)
  formInfo.totalRecruitingCost = formatter.format(totalRecruitingCost)
  formInfo.totalOnboardingCost = formatter.format(totalOnboardingCost)
  formInfo.totalLossCost = formatter.format(totalLossCost)
  formInfo.totalProgramCost = formatter.format(totalProgramCost)
  formInfo.totalSavings = formatter.format(totalSavings)


  return response.render('formResult', formInfo)
})


app.listen(5000, () => {
  console.log('Listening on port 5000...') // eslint-disable-line no-console
})
