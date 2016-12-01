const LED = NodeMCU.D4;
const wifi = require('Wifi');
const http = require('http');

const ssid = 'Code Fellows 5G';
const password = 'LearnMoreFaster!';

function main() {
    pinMode(LED, 'output');
    
    wifi.connect(ssid, { password }, err => {
        if (err) return console.error(err);
        connect();
    });
}

function connect() {
    setInterval(() => {
        getValue(({ isOn }) => {
            digitalWrite(LED, !isOn)
        });
    }, 1000);
}

const url = `http://192.168.1.50:3000/light`;

function getValue(cb) {
    http.get(url, res => {
        let content = '';
        res.on('data', data => content += data);
        res.on('close', () => cb(JSON.parse(content)));
    });
}