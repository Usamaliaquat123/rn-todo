import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Lists from '../../components/Lists/Lists'
import { MainStackParamList } from '../../navigation/MainStackNavigator'
import * as InitialAppActions from '../../redux/Actions/InitialAppActions'
import { RootState } from '../../redux/Store'
import listAction from '../../redux/Actions/listActions'

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'HomeScreen'>
type HomeScreenRouteProp = RouteProp<MainStackParamList, 'HomeScreen'>

type HomeScreenProps = {
  route: HomeScreenRouteProp
  navigation: HomeScreenNavigationProp
}

const HomeScreen = (props: HomeScreenProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(InitialAppActions.initialApp())
  })

  const DATA = useSelector((state: RootState) => state.list.list)

  const deleteList = (id: string) => {
    dispatch(listAction.delList(id))
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Lists
            title={item.text}
            id={item.id}
            editList={() => {
              props.navigation.navigate('AddListScreen', { id: item.id, text: item.text })
            }}
            deleteList={() => {
              deleteList(item.id)
            }}
          />
        )}
        keyExtractor={({ item, index }) => index}
      />

      <TouchableOpacity
        onPress={() => props.navigation.navigate('AddListScreen')}
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 70,
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: 70,
          backgroundColor: 'red',
          borderRadius: 100,
        }}>
        <Text style={{ color: 'white' }}>add a rough item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#222',

    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
})

export default HomeScreen
