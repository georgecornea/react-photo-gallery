import firebase, { db } from './firebase.config';
import {
  getDocs,
  serverTimestamp,
  setDoc,
  doc,
  collection,
} from 'firebase/firestore';

// const db = getFirestore(firebase);

const Firestore = {
  readDocs: (...args) => {
    // const [collectionName] = args; // if more collections available
    let photos = [];
    const ref = collection(db, 'photos');
    return new Promise(async (resolve) => {
      try {
        const snapshots = await getDocs(ref);
        snapshots.forEach((doc) => {
          const d = { ...doc.data() };
          photos.push(d);
        });
        resolve(photos);
      } catch (e) {
        console.log(e);
      }
    });
  },

  writeDoc: (...args) => {
    const [input, collection] = args;
    return new Promise(async (resolve) => {
      const randomId = Math.floor(Math.random() * 1000000000);
      try {
        const docRef = doc(db, 'photos', `${randomId}`);
        await setDoc(docRef, {
          title: input.title,
          path: input.path,
          createdAt: serverTimestamp(),
        });
        resolve(`${input.title} successfully saved!`);
      } catch (e) {}
    });
  },
};

export default Firestore;
