import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Platform
} from "react-native"
import { useState, useEffect } from 'react';
import NoteList from '../../components/NoteList'
import AddNoteModal from "../../components/AddNoteModal";
import noteService from "../../services/noteService";
import { useRouter } from "expo-router";
import { useAuth } from '../../context/AuthContext';


const NoteScreen = () => {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth();
  const [notes, setNotes] = useState([
    // {id: '1', text: 'Note one'},
    // {id: '2', text: 'Note two'},
    // {id: '3', text: 'Note three'},
  ])
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!authLoading && !user) {
      // εδω κάνουμε το redirect
      router.replace('/auth')
    }
  },[user, authLoading, router])

  const fetchNotes = async () => {
    setLoading(true)
    const response = await noteService.getNotes();

    if (response.error) {
      setError(response.error)
      Alert.alert('Error', response.error)
    } else {
      setNotes(response.data);
      setError(null)
    }
    setLoading(false)
  }
  useEffect(() => {
    if (user) {
      fetchNotes();      
    }
  }, [user])

  // add new note
  const addNote = async () => {
    if (newNote.trim() === '') {
      return
    }

    // setNotes((prevNotes) => [
    //   ...prevNotes,
    //   { id: Date.now.toString(), text: newNote }
    // ]);
    const response = await noteService.addNote(newNote)

    if (response.error) {
      Alert.alert('Error', response.error)
    } else {
      setNotes([...notes, response.data])
    }

    setNewNote('')
    setModalVisible(false)
  }

  // Delete Note
  const deleteNote = async (id) =>{

    // αυτό δεν είναι μέρος του tutorial. προστέθηκε γιατί ενώ το Alert δουλέυει αν χρησιμοποιήσεις την expo app στον web δεν εμφανιζόταν
    // ✅ fallback for web
    if (Platform.OS === "web") {
      alert("Web Alert: Are you sure you want to delete this note? (deletes immediately)");
      const response = await noteService.deleteNote(id);
      if (response.error) {
        alert("Error: " + response.error);
      } else {
        setNotes(notes.filter((note) => note.$id !== id));
      }
      return;
    }

    Alert.alert(
      'Delete Note',
      'Are you sure you want to delte this note',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text:'Delete',
          style: "destructive",
          onPress: async () => {
            const response = await noteService.deleteNote(id);
            if (response.error) {
              Alert.alert('Error', response.error)
            } else {
              setNotes(notes.filter( (note) => note.$id !== id))
            }
          }
        }
      ]
    )
  }

  // Edit Note
  const editNote = async (id, newText) => {
    if(!newText.trim()){
      Alert.alert('Error', ' Note text can not be empty')
      return
    }

    const response = await noteService.updateNote(id, newText)
    if (response.error) {
      Alert.alert('Error', response.error)
    } else {
      setNotes((prevNotes) => prevNotes.map((note) => note.$id === id ? {...note, text: response.data.text} : note ))
    }
  }

  return ( 
    <>
      <View 
        style={styles.container}
      >
        {/* Note List */}
        {/* <NoteList notes={notes} /> */}
        { loading ? (
          <ActivityIndicator size='large' color='#007bff' />
        ) : (
          <>
            { error && <Text style={styles.errorText}>{error}</Text> }
            <NoteList
              notes={notes}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          </>
        ) }

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