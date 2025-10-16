import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal, //
  TextInput
} from "react-native"
import { useState } from 'react';


const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {id: '1', text: 'Note one'},
    {id: '2', text: 'Note two'},
    {id: '3', text: 'Note three'},
  ])
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('')

  return ( 
    <>
      <View 
        style={styles.container}
      >
        {/* το Flatlist είναι κάτι που λειτουργεί σαν το map  */}
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.noteItem}>
              <Text style={styles.noteText}>{item.text}</Text>
            </View>
          )}
        />

        {/* έτσι γίνετε το Btn */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={ () => {
            setModalVisible(true)
          }}
        >
          <Text style={styles.addButtonText}>+ Add Note</Text>

        </TouchableOpacity>

        {/* Modal */}
        <Modal
          visible={modalVisible} // true/false απο το state
          animationType="slide"
          transparent
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={styles.modalOverlay}
          >

          </View>

        </Modal>
      </View>
    </>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
  },
  noNotesText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 15,
  },
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent dark background
    justifyContent: 'center',            // center content vertically
    alignItems: 'center',                // center content horizontally
    padding: 20,
  },


});
 
export default NoteScreen;