const userService = require('../services/user.service')
const jwt = require('../utils/jwt')

// req.body:
// {
//   "email": "",
//   "password": ""
// }
const login = async (req, res, next) => {
  try {
    let result = await userService.getUser(req.body)
    console.log(result)
    if(result.length !== 0){
      let token = jwt.createJWT(result)
      res.json({
        code: 200,
        msg: 'login',
        token
      })
    } else {
      res.status(401).json({
        code: 401,
        msg: 'user not exist'
      })
    }
  } catch (err) {
    next(err)
  }
}

// req.body:
// {
//   "name": "",
//   "email": "",
//   "password": "",
//   "clinic_name": "",
//   "phone_number": "",
//   "address": ""
// }
const register = async (req, res, next) => {
  try {
    let result = await userService.createUser(req.body)
    res.json({
      code: 200,
      msg: 'Success !',
      result
    })
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      res.status(409).json({
        code: 409,
        msg: "Email or Phone Number was used before."
      })
    } else {
      next(err)
    }
  }
}

module.exports = {
  login,
  register
}