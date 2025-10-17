import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const NoteItem = ({ note, onDelete }) => {
  return ( 
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
      <TouchableOpacity
        onPress = { 
          () => {
            console.log("Deleting note:", note.$id);
            onDelete(note.$id)
          }
        }
      >
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  noteItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
  delete: {
    fontSize: 18,
    color: 'red'
  }
})
 
export default NoteItem;