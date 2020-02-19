const firebase = require('firebase');
const {firebaseConfig} = process.env.NODE_ENV === 'production' ? {} : require('../db/dev-settings');

const config = {
    apiKey: process.env.FIREBASE_API_KEY || firebaseConfig.apiKey,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || firebaseConfig.authDomain,
    databaseURL: process.env.FIREBASE_DATABASE_URL || firebaseConfig.databaseURL,
    projectId: process.env.FIREBASE_PROJECT_ID || firebaseConfig.projectId,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || firebaseConfig.storageBucket,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || firebaseConfig.messagingSenderId,
    appId: process.env.FIREBASE_APP_ID || firebaseConfig.appId,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);
const db = firebase.database();

module.exports = {firebase, db};
