import databaseService from "./databaseService"
import { ID } from 'react-native-appwrite'

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID

const noteService = {
  // Get Notes
  async getNotes() {
    const responce = await databaseService.listRows(dbId, colId)
    if (responce.error) {
      return { error: responce.error}
    }
    return { data: responce}
  }
}

export default noteService