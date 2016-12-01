const app = require('express')();

let isOn = false;

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
});

app.get('/light', (req, res) => {
    res.send({ isOn });
});

app.put('/light', (req, res) => {
    isOn = req.query.on === 'true';
    res.send({ isOn });
});

app.listen(3000, () => console.log('server on'));