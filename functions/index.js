const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();
let tasksRef = admin.firestore().collection('TASKS')

const express = require('express');
const cors = require('cors');
 
const app = express();
app.use(cors({ origin: true }));

app.get('/tasks', (req, res) => {
    const snapshot = tasksRef.get();
    snapshot.then(result => {
        var resultList = [];
        result.forEach((doc) => {
            resultList.push(doc.data());
        });
        
        console.log("the task list which we want to return:");
        console.log(resultList);
        
        res.set({ 'Access-Control-Allow-Origin': '*' });
        res.send(resultList);
    })
})

app.post('/tasks', (req, res) => { 
    tasksRef.add(req.body);
      
    console.log('Added task:');
    console.log(req.body);

    res.set({ 'Access-Control-Allow-Origin': '*' });
    res.sendStatus(200);
})

//app.delete('/tasks/:name', (req, res) => { /*TODO: ...*/ })
 
exports.api = functions.region("europe-west1").https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
