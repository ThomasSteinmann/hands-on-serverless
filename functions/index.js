const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');

admin.initializeApp();
const app = express();

let tasksRef = admin.firestore().collection("TASKS")

app.get('/tasks', (req, res) => {  // Try getting these directly from frontend
    tasksRef.get().
        then(result => {
            lst = []
            result.forEach(doc => lst.push(doc.data()))
            console.log(lst);
            res.json(lst)
        });
})

app.post('/tasks', (req, res) => {
    tasksRef.doc(req.body.name).set(req.body)
    res.send(req.body);
})

app.delete('/tasks/:name', (req, res) => {
    tasksRef.doc(req.params.name).delete();
    res.send(`Task with name: [${req.params.name}] deleted`);
});

exports.api = functions.region("europe-west1").https.onRequest(app);
