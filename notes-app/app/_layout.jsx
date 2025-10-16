import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{ 
        headerStyle: {
          backgroundColor: '#ff8c00'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold'
        },
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#fff'
        },
      }}>
        {/* name='index' αντιστοιχεί στο app/index.jsx
        name='notes' αντιστοιχεί στο app/notes/index.jsx
        Το options={{ headerTitle: 'Notes' }} αλλάζει τον τίτλο που φαίνεται στη μπάρα πλοήγησης. */}
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        <Stack.Screen name='notes' options={{ headerTitle: 'Notes' }} />
    </Stack>
  )
}
export default RootLayout
