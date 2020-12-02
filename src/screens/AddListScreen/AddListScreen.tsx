import {RouteProp} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import React, {useState, useEffect} from 'react'
import Form from '../../components/Form/Form'
import {MainStackParamList} from '../../navigation/MainStackNavigator'
import {useDispatch} from 'react-redux'
import * as listAction from '../../redux/Actions/listActions'

type AddListScreenNavigationProp = StackNavigationProp<MainStackParamList, 'AddListScreen'>
type AddListScreenRouteProp = RouteProp<MainStackParamList, 'AddListScreen'>

type AddListScreenProps = {
  route: AddListScreenRouteProp
  navigation: AddListScreenNavigationProp
}

const AddListScreen = (props: AddListScreenProps) => {
  const [text, setText] = useState(props.route.params ? props.route.params.text : '')
  const [mode, setMode] = useState(props.route.params ? 'edit' : 'add')
  const dispatch = useDispatch()

  const setList = (text: string) => {
    setText(text)
  }

  const addList = () => {
    dispatch(listAction.addList(text))
    props.navigation.navigate('HomeScreen')
  }

  const editList = () => {
    dispatch(listAction.editList(props.route.params.id, text))
    props.navigation.navigate('HomeScreen')
  }

  return <Form setList={setList} addList={addList} editList={editList} mode={mode} text={text} />
}

export default AddListScreen
