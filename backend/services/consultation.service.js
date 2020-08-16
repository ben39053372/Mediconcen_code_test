const getSql = require('../utils/getSql')
const pool = require('../utils/database')

const getConsultationByPeriod = async (from, to) => {
  try {
    let sql = getSql('consultation', 'selectAll')
    let [result, _] = await pool.promise().query(sql, [from, to])
    return result
  } catch (err) {
    throw err
  }
}

const getConsultationByRecordId = async id => {
  try {
    let sql = getSql('consultation', 'selectById')
    let [result, _] = await pool.promise().query(sql, [id])
    return result
  } catch (err) {
    throw err
  }
}

const createConsultation = async data => {
  try {
    let sql = getSql('consultation', 'insert')
    let result = await pool.promise().query(sql, [
      data.clinic_name,
      data.doctor_name,
      data.patient_name,
      data.diagnosis,
      data.medication,
      data.consultation_fee,
      new Date(data.datetime),
      data.followup_consultation,
      data.followup_consultation
    ])
    return result
  } catch (err) {
    throw err
  }
}

module.exports = {
  getConsultationByPeriod,
  getConsultationByRecordId,
  createConsultation
}