const express = require('express');
const mongoose = require('mongoose');
const Pusher = require('pusher');

const Message = require('./models/Message');

const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: '1068500',
    key: '3ab8475e8fe7afc3da54',
    secret: 'f30ad577c90705c91a15',
    cluster: 'eu',
    encrypted: true
  });


app.use(express.json());

const connection_url = 'mongodb://127.0.0.1:27017/whatsapp';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("DB connected")
});

const msgCollection = db.collection('messagecontent');
const changeStream = msgCollection.watch();


app.get('/', (req, res) => {
    res.status(200).send("hello world");
});

app.get('/messages/sync', (req, res) => {
    Message.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post('/messages/new', (req, res) => {
    
    const dbMessage = req.body;

    Message.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});


app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`)
})
