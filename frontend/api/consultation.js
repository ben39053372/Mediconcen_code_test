import api from './index'

export const getRecordById = id => {
  return api({
    url: `/consultation/record/${id}`,
    method: 'GET'
  })
}

export const getRecordByPeriod = (from, to) => {
  return api({
    url: `/consultation/records/${from}/${to}`,
    method: 'GET'
  })
}

export const createRecord = data => {
  return api({
    url: `/consultation/record`,
    method: 'POST',
    data
  })
}