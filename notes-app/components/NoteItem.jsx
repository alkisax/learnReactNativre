import { View, Text, StyleSheet } from 'react-native'

const NoteItem = ({ note }) => {
  return ( 
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
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
})
 
export default NoteItem;