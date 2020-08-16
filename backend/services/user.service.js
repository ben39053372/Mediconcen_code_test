const getSql = require('../utils/getSql')
const pool = require('../utils/database')

const getUser = async ({ email, password }) => {
  try {
    let sql = getSql('user','select')
    let [result, _] = await pool.promise().query(sql, [email, password])
    return result
  } catch (err) {
    throw err
  }
}

const createUser = async ({ email, password, clinic_name, phone_number, address }) => {
  try {
    let sql = getSql('user', 'insert')
    let [result, _] = await pool.promise().query(sql, [email, password, clinic_name, phone_number, address])
    return result
  } catch (err) {
    throw err
  }
}

module.exports = {
  getUser,
  createUser
}