const userRoute = require('express').Router()
const userController = require('../controller/user.controller')

userRoute.post('/login', userController.login)
userRoute.post('/signUp', userController.register)

userRoute.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    code: 500,
    msg: "user module error",
    error: err
  })
})

module.exports = userRoute