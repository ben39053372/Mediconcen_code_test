import { getItem, setItem } from '../localStore'
import { Buffer } from 'buffer'

export const isLogin = async () => {
  let tokenWithBearer = await getItem('token')
  console.log(tokenWithBearer)
  if (!tokenWithBearer) {
    console.log(tokenWithBearer)
    return false
  } else {
    console.log('...')
    let token = tokenWithBearer?.replace('Bearer ', '')
    let parts = token?.split('.').map(part => Buffer.from(part.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString())
    let payload = JSON.parse(parts[1])
    console.log(payload.exp)
    if (Date.now() >= payload.exp * 1000) {
      return false
    } else {
      return true
    }
  }

}

export const logout = () => {
  setItem('token', null)
}