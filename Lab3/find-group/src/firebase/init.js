// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { gerFirestore, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCk3MjYxjjN-U1lsu9O-hlObOlrD6viyGI',
	authDomain: 'piw-test.firebaseapp.com',
	projectId: 'piw-test',
	storageBucket: 'piw-test.appspot.com',
	messagingSenderId: '769129713135',
	appId: '1:769129713135:web:e3c0c9767b7f95b91bba1a',
	measurementId: 'G-23DQ4DPPLW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
