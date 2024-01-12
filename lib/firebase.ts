// // TODO: Setup admin service account with a protected DB
import { initializeApp, getApps } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.FIREBASE_APP_ID,
// measurementId: process.env.FIREBASE_MEASUREMENT_ID
// }

// // Initialize Firebase
// const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
// let analytics
// // TODO: Use with `isSupported` to check if analytics is supported if the client wants it
// isSupported().then((supported) => {
// 	if (supported) {
// 		analytics = getAnalytics(firebase_app)
// 	}
// })

// export default firebase_app

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
let analytics
// TODO: Use with `isSupported` to check if analytics is supported if the client wants it
isSupported().then((supported) => {
	if (supported) {
		analytics = getAnalytics(firebase_app)
	}
})

export default firebase_app
