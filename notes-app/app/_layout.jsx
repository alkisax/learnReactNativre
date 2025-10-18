import {AuthProvider, useAuth} from '@/context/AuthContext'
import { Stack } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HeaderLogout = () => {
  const { user, logout } = useAuth()

  return user ? (
    <TouchableOpacity
      style={styles.logoutButton}
      onPress={logout}
    >
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : (
    null
  )
}

const RootLayout = () => {
  return (
    <AuthProvider>
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
          headerRight: () => <HeaderLogout />,
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
          <Stack.Screen name='auth' options={{ headerTitle: 'Login' }} />
      </Stack>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ff3b30',
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default RootLayout
