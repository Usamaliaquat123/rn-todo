import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

type ListsProps = {
  title: string
  id: string
  editList(): any
  deleteList(): any
}

const Lists = (props: ListsProps) => {
  console.log(props)

  return (
    <View style={styles.list}>
      <View style={styles.viewTitle}>
        <Text>{props.title}</Text>
      </View>
      <View style={styles.viewAction}>
        <TouchableOpacity onPress={props.editList}>
          <Text style={styles.editButton}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.deleteList}>
          <Text style={styles.deleteButton}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Lists
