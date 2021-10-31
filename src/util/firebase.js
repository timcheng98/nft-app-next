import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // databaseURL: "YOUR_DB_URL"
    });

  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

const firestore = admin.firestore()
export { firestore };
