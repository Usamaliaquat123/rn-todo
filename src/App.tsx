import React from 'react'
import {Provider} from 'react-redux'
import MainStackNavigator from './navigation/MainStackNavigator'
import Store from './redux/Store'

export default function App() {
  return (
    <Provider store={Store}>
      <MainStackNavigator />
    </Provider>
  )
}
