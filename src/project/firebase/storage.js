import { ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase.config';

const Storage = {
  uploadPhoto: (photo) => {
    return new Promise(async (resolve) => {
      try {
        const photoRef = ref(storage, `images/${photo.title}`);
        uploadBytes(photoRef, photo.file).then((snapshot) => {
          resolve({ path: snapshot.metadata.fullPath, name: photo.title });
        });
      } catch (e) {
        console.error(e);
      }
    });
  },
};

export default Storage;
