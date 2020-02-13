const firebase = require('firebase');
const {firebaseConfig} = require('../db/dev-settings');
const {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
} = firebaseConfig;

const config = {
    apiKey: process.env.FIREBASE_API_KEY || apiKey,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || authDomain,
    databaseURL: process.env.FIREBASE_DATABASE_URL || databaseURL,
    projectId: process.env.FIREBASE_PROJECT_ID || projectId,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || storageBucket,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || messagingSenderId,
    appId: process.env.FIREBASE_APP_ID || appId,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);
const db = firebase.database();

module.exports = {firebase, db};
