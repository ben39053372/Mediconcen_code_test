const consultationServices = require('../services/consultation.service')

const getConsultationList = async (req, res) => {
  let result = await consultationServices.getConsultationByPeriod(req.params.from, req.params.to)
  res.json({
    status: 200,
    msg: 'getConsultationList',
    result
  })
}

const getConsultationById = async (req, res) => {
  let result = await consultationServices.getConsultationByRecordId(req.params.id)
  res.json({
    status: 200,
    msg: 'getConsultationById',
    result
  })
}

const postConsultationRecord = async (req, res) => {
  let result = await consultationServices.createConsultation(req.body)
  res.json({
    status:200,
    msg: 'post a new record',
    result
  })
}

module.exports = {
  getConsultationList,
  getConsultationById,
  postConsultationRecord
}