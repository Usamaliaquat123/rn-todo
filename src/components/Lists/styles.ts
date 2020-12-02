import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  list: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  viewTitle: {
    flex: 1
  },
  viewAction: {
    flexDirection: 'row'
  },
  editButton: {
    color: 'blue', paddingHorizontal: 5
  },
  deleteButton: {
    color: 'red', paddingHorizontal: 5
  }
})

export default styles
