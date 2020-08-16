const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const secret = process.env['TOKENKEY']

const whiteList = require('./tokenWriteList')

const createJWT = (data) => {
  return 'Bearer ' + jwt.sign({data}, secret, {
    expiresIn: "2h"
  })
}

const validToken = expressJwt({secret , algorithms: ['HS256']}).unless({path: whiteList})

module.exports = {
  createJWT,
  validToken
}