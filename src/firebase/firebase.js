import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

//initialize firebase
firebase.initializeApp(config);

//create database
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider ,database as default };

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     }); 
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'Water Bill',
//   note: '',
//   amount: 100,
//   createdAt: moment().add(4, 'day').unix()
// });

// database.ref('expenses').push({
//   description: 'Rent ',
//   note: '',
//   amount: 1500,
//   createdAt: moment().add(5, 'day').unix()
// });

// database.ref('expenses').push({
//   description: 'Internet Bill',
//   note: '',
//   amount: 300,
//   createdAt: moment().add(2, 'day').unix()
// });

// database.ref('notes').push({
//   title: 'Course',
//   body: 'Reactjs '
// });

// database.ref().on('value', (snapshot) => {
//   // console.log(snapshot.val());
//   const val = snapshot.val();
//   const { name, job, location } = val;
//   console.log(`${name} is a  ${job.title} at ${location.city}`);
// }, (err) => {
//   console.log('Error: ', err);
// });

// database.ref('location').once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((err) => {
//   console.log('Error: ', err)
// });

// remove data
// database.ref('isSinge').remove().then(() => {
//   console.log('Data removed: isSingle');
// }).catch((err) => {
//   console.log(err);
// });

// update data
// database.ref().update({
//   name: 'Bloom'
// });


