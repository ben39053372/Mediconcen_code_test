const router = require('express').Router()
const user = require('./user.route')
const consultation = require('./consultation.route')

router.use((req, res, next) =>  {
  console.log(req.user)
  next()
})

router.get('/', (req, res) => {
  console.log('index')
  res.send('hello world')
})

router.use('/user', user)

router.use('/consultation', consultation)

// route not found error handle
router.use((err, req, res, next) => {
  console.log(err)
  res.status(404).json({
    code: 404,
    msg: '404 not found',
    error: err
  })
})

module.exports = router