const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

app.get('/api/client', (req, res) => {
    res.json([
        {name: 'Andrey', company: 'Synca'},
        {name: 'Alex', company: 'CRM Pro'}
    ])
})

app.post('/api/client', (req, res) => {
    const newClient = req.body;

    res.json({
        message: 'Added new client',
        client: newClient
    })
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});