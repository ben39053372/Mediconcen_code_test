import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import routes from './routes'
import { isLogin } from './utils/auth'
import { StatusBar } from 'react-native'
import { useSelector } from 'react-redux';
import Loading from './Components/Loading';

const Stack = createStackNavigator();

export default () => {
  const [loading, setLoading] = useState(true)
  const [logined, setLogined] = useState(false)
  const token = useSelector(state => state.token)

  useEffect(() => {
    (async () => {
      let loginState = await isLogin()
      setLogined(loginState)
      setLoading(false)
    })()
  }, [token])

  if (loading) {
    // We haven't finished checking for the token yet
    return <Loading />;
  }
  return (
    <>
      <StatusBar />
      <Stack.Navigator>
        {logined ?
          routes[1].map((route, index) => {
            return (<Stack.Screen key={`route[${index}]`} {...route} />)
          })
          :
          routes[0].map((route, index) => {
            return (<Stack.Screen key={`route[${index}]`} {...route} />)
          })
        }
      </Stack.Navigator>
    </>
  )
}