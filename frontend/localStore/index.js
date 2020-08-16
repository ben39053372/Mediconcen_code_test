import { AsyncStorage } from 'react-native'

export const setItem = async (key, value) => {
  try {
    return await AsyncStorage.setItem(
      `@ClinicAppStore:${key}`,
      value
    )
  } catch(err) {
    console.log(err)
  }
}

export const getItem = async (key) => {
  try {
    let item = await AsyncStorage.getItem(`@ClinicAppStore:${key}`)
    return item
  } catch(err) {
    console.log(err)
  }
}