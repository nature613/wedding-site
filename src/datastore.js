import * as firebase from 'firebase'

export const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAaF00zUxGzei-Q2Qdp7GdpTSOXjqoB__w",
	authDomain: "david-and-dacia-wedding.firebaseapp.com",
	databaseURL: "https://david-and-dacia-wedding.firebaseio.com",
	projectId: "david-and-dacia-wedding",
	storageBucket: "david-and-dacia-wedding.appspot.com",
	messagingSenderId: "387863896239"
})

export const db = firebaseApp.database()

export const guestsRef = db.ref('rsvp').orderByChild('name')
