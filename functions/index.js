const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

admin.initializeApp();
const app = express();
app.use(cors({ origin: true }));

const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');

let tasksRef = admin.firestore().collection("TASKS")
var bucketRef = admin.storage().bucket();

app.get('/tasks', (req, res) => {  // Try getting these directly from frontend
    tasksRef.get().
        then(result => {
            lst = []
            result.forEach(doc => lst.push(doc.data()))
            res.set({ 'Access-Control-Allow-Origin': '*' })
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

app.get('/thumbnails', (req, res) => {
    bucketRef.getFiles().then(lst => res.json(lst))
})

async function processUpload(object) {
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const filePath = object.name; // File path in the bucket.
    const fileName = path.basename(filePath);
    const contentType = object.contentType; // File content type.

    if (!contentType.startsWith('image/')) {
        return console.log('This is not an image.');
    }

    if (fileName.startsWith('thumb_')) {
        return console.log('Already a Thumbnail.');
    }

    // Download file from bucket.
    const bucket = admin.storage().bucket(fileBucket);
    const tempFilePath = path.join(os.tmpdir(), fileName);
    const metadata = {
        contentType: contentType,
    };
    await bucket.file(filePath).download({ destination: tempFilePath });
    console.log('Image downloaded locally to', tempFilePath);
    // Generate a thumbnail using ImageMagick.
    await spawn('convert', [tempFilePath, '-thumbnail', '200x200>', tempFilePath]);
    console.log('Thumbnail created at', tempFilePath);
    // We add a 'thumb_' prefix to thumbnails file name. That's where we'll upload the thumbnail.
    const thumbFileName = `thumb_${fileName}`;
    const thumbFilePath = path.join(path.dirname(filePath), thumbFileName);
    // Uploading the thumbnail.
    await bucket.upload(tempFilePath, {
        destination: thumbFilePath,
        metadata: metadata,
    });
    // Once the thumbnail has been uploaded delete the local file to free up disk space.
    return fs.unlinkSync(tempFilePath);
}

exports.api = functions.region("europe-west1").https.onRequest(app);
exports.generateThumbnail = functions.region("europe-west1").storage.object().onFinalize(async (object) => processUpload(object))