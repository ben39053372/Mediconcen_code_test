import api from './index'

export const userLogin = data => {
  return api({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export const userSignUp = data => {
  return api({
    url: '/user/signup',
    method: 'POST',
    data
  })
}