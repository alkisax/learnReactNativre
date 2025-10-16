import { Stack } from "expo-router"

const NoteLayout = () => {
  return <Stack
    // εμφανιζε δύο header έναν το component και ένα του γενικού layout 
    screenOptions={{
      headerShown: false
    }}
  />
}

export default NoteLayout