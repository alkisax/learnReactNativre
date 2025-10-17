import { database } from "./appwrite";

const databaseService = {
  // List Documents
  listRows: async (dbId, colId) => {
    try {
      const response = await database.listDocuments({
        databaseId: dbId,
        collectionId: colId
      })
      return response.documents || []
    } catch (error) {
      console.error('Error fetching documents:', error.message)
      return { error: error.message }
    }
  }
}

export default databaseService