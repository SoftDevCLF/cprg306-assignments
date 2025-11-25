import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsCollection = collection(db, "users", userId, "items");
    const collectionQuery = query(itemsCollection);
    const querySnapshot = await getDocs(collectionQuery);
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    return [];
  }
}

export async function addItem(userId, item) {
  try {
    const docReference = await addDoc(
      collection(db, "users", userId, "items"),
      item
    );
    return docReference.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}
