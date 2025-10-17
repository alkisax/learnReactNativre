import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { useState } from 'react';
import NoteList from '../../components/NoteList'
import AddNoteModal from "../../components/AddNoteModal";


const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {id: '1', text: 'Note one'},
    {id: '2', text: 'Note two'},
    {id: '3', text: 'Note three'},
  ])
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('')

  // add new note
  const addNote =() => {
    if (newNote.trim() === '') {
      return
    }
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now.toString(), text: newNote }
    ]);

    setNewNote('')
    setModalVisible(false)
  }

  return ( 
    <>
      <View 
        style={styles.container}
      >
        {/* Note List */}
        <NoteList notes={notes} />

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
        <AddNoteModal 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          newNote={newNote}
          setNewNote={setNewNote}
          addNote={addNote}
        />
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

});
 
export default NoteScreen;