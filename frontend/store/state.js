import {getItem} from '../localStore'

export default initState = {
  token: async () => await getItem()
}