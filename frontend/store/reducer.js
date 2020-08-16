import initState from './state'
import {saveToken} from './action'


const reducer = (state = initState, action) => {
  switch(action.type) {
    case saveToken: {
      return {...state, token: action.payload.token}
    }
    default:
      return state
  }
}

export default reducer