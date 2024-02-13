import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const env = import.meta.env

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: env.VITE_API_KEY,
	authDomain: env.VITE_AUTH_DOMAIN,
	projectId: env.VITE_PROJECT_ID,
	storageBucket: env.VITE_STORAGE_BUCKET,
	messagingSenderId: env.VITE_MESSAGING_SENDER_ID,
	appId: env.VITE_APP_ID,
	measurementId: env.VITE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)

const auth = getAuth(app)

const storage = getStorage(app)

const database = getFirestore(app)

export { app, analytics, auth, storage, database }
