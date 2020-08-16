const consultationRoute = require('express').Router()
const consultationController = require('../controller/consultation.controller')

consultationRoute.get('/records/:from/:to', consultationController.getConsultationList)

consultationRoute.get('/record/:id', consultationController.getConsultationById)

consultationRoute.post('/record', consultationController.postConsultationRecord)

module.exports = consultationRoute