import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles'

type FormProps = {
  text: string
  mode: string
  setList(text: string): any
  addList(): any
  editList(): any
}

const Form = (props: FormProps) => {
  return (
    <View style={styles.container}>
      <View
        style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Type text here!"
          value={props.text}
          onChangeText={text => props.setList(text)}
        />
      </View>
      {props.mode == 'add' ? (
        <View style={styles.paddingTextInput}>
          <Button title="ADD" onPress={() => props.addList()} disabled={!props.text} />
        </View>
      ) : (
          <View style={styles.paddingTextInput}>
            <Button title="EDIT" onPress={() => props.editList()} disabled={!props.text} />
          </View>
        )}
    </View>
  )
}

export default Form
