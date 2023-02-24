import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setAuthorized, setUsername } from '../zustand/useAuthorizationStore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databseUrl: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// const auth = getAuth(app);

// const signUserAccountWithEmailAndPassword = async (email:string, password:string) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password).then(async (res) => {
//       setUsername(res.user.displayName)
//       setAuthorized(true)

//     });
//   } catch (err: any) {
//     console.log(err.errors.message)
//   }
// };

export { db }
