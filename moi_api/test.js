var express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello world!\n')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(8600, () => {
    console.log('Example app listening on port 8600')
})

let users = [{
        id: 1,
        name: 'Hyun'
    },
    {
        id: 2,
        name: 'Alice'
    },
    {
        id: 3,
        name: 'Kelly'
    }
]