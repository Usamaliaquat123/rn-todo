import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import AddListScreen from '../screens/AddListScreen/AddListScreen'

export type MainStackParamList = {
  HomeScreen: undefined
  AddListScreen: undefined
}

const MainStack = createStackNavigator<MainStackParamList>()

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeScreen">
        <MainStack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home'}} />
        <MainStack.Screen
          name="AddListScreen"
          component={AddListScreen}
          options={{title: 'Add List'}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
