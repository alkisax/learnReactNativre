import { account } from "./appwrite"
import { ID } from 'react-native-appwrite'

const authService = {
 // register a user
 async register (email, password) {
  try {
    const response = await account.create(ID.unique(), email, password)
    return response
  } catch (error) {
    return {
      error: error.message || 'Registration failed. Please try again'
    }
  }
 },

 //login
  async login (email, password) {
    try {
      const response = await account.createEmailPasswordSession( email, password)
      return response
    } catch (error) {
      return {
        error: error.message || 'login failed. Please check your credentials'
      }
    }
  },

  // Get Loged in user
  async getUser (email, password) {
    try {
      return await account.get()
    } catch (_error) {
      return null
    }
  },

  // Logout user
  async logout () {
    try {
      await account.deleteSession('current')
    } catch (error) {
      return {
        error: error.message || 'Logout failed. Please try again'
      }
    }
  }
}
export default authService;