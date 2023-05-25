import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase , googleAuthProvider, db as default};

  /* // child_removed
  db.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_changed
  db.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });
  
  // child_added
  db.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  }); */
  
  // db.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];
  
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  
  //     console.log(expenses);
  //   });
  
  // db.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];
  
  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  
  //   console.log(expenses);
  // });
  
  /* db.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
  });

  db.ref('expenses').push({
    description: 'Apple',
    note: '',
    amount: 9500,
    createdAt: 180345353458
  });
  
   */
  
  
  
  
  // db.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();
  
  // db.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'React Native, Angular, Python'
  // });
  
  // db.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // })
  
  // Setup data sub -> Andrew is a Software Developer at Amazon.
  
  // Change the data and make sure it reprints
  
  // db.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });
  
  // db.ref().set({
  //   name: 'Andrew Mead',
  //   age: 26,
  //   stressLevel: 6,
  //   job: {
  //     title: 'Software developer',
  //     company: 'Google'
  //   },
  //   location: {
  //     city: 'Philadelphia',
  //     country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved!');
  // }).catch((e) => {
  //   console.log('This failed.', e);
  // });
  
  // db.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Seattle'
  // });
  
  // db.ref()
  //   .remove()
  //   .then(() => {
  //     console.log('Data was removed');
  //   }).catch((e) => {
  //     console.log('Did not remove data', e);
  //   });
  