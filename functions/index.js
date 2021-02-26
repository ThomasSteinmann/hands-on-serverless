const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();
let tasksRef = admin.firestore().collection("TASKS")

const express = require('express');
const cors = require('cors');
 
const app = express();
app.use(cors({ origin: true }));

app.get('/tasks', (req, res) => { 
    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.send("[{\"description\":\"Mi first task\",\"status\":\"ToDo\",\"name\":\"Step 1\"},{\"status\":\"ToDo\",\"description\":\"My second task\",\"name\":\"Step 2\"}]");
})
//app.post('/tasks', (req, res) => { /*TODO: ...*/ })
//app.delete('/tasks/:name', (req, res) => { /*TODO: ...*/ })
 
exports.api = functions.region("europe-west1").https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
