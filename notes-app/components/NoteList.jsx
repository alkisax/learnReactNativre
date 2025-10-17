import { View, FlatList } from 'react-native'
import NoteItem from './NoteItem'

const NoteList = ({ notes, onDelete, onEdit }) => {
  return ( 
    <View>
      {/* το Flatlist είναι κάτι που λειτουργεί σαν το map  */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <NoteItem 
            note={item}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )}
      />            
    </View>
   );
}
 
export default NoteList;