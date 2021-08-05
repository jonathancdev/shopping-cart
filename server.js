const path = require('path')
const express = require('express')
const app = express();
const DIR = './'

app.use(express.static(DIR))
app.use(express.json())
const PORT = 3500;

app.post('/', (req, res) => {
    if(Object.keys(req.body).length > 0) {
        res.json({
            received: req.body
        })
    } else {
        res.send("Got the post!")
    }
})

app.get('/auth-endpoint', (req, res) => {
    if(req.headers.authorization && req.headers.authorization == '8675309') {
        res.send('Authorized!')
    } else {
        res.status(401).send()
    }
})

app.listen(PORT, () => console.log('Server started on port ' + PORT))


//CLI
//node server.js