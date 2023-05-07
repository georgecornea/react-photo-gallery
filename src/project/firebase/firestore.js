import firebase, { db } from './firebase.config';
import { getFirestore, serverTimestamp, setDoc, doc } from 'firebase/firestore';

// const db = getFirestore(firebase);

const Firestore = {
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
