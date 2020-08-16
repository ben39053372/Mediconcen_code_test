require('dotenv').config()
const express = require('express')
const cors = require('cors')

const port = process.env['PORT'] || 3000

const router = require('./router/index.route')
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(require('./utils/jwt').validToken)
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {   
    res.status(401).json({
      code: 401,
      msg: 'invalid token'
    })
  }
})

app.use(router)

app.listen(port, () => {
  console.log(`Server started at ${port}`)
})