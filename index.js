const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

const latestRelease = '1.2.0';

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/releases/:platform', (request, response) => {
    const { platform } = request.params;
    const { currentVersion } = request.query;

    if (currentVersion === latestRelease) {
        response.status(204);
        return response.end();
    }

    if (platform === 'darwin') {
        return response.json({
            url:
                'https://cdn.glitch.com/f52e5387-d62f-4b75-a3ae-3fb841c88f36%2FFire%20Sale-darwin-x64-v1.2.0.zip?1509384546668'
        });
    }

    if (platform === 'win32') {
        return response.json({
            url:
                'https://cdn.glitch.com/f52e5387-d62f-4b75-a3ae-3fb841c88f36%2FFire%20Sale-darwin-x64-v1.2.0.zip?1509384546668'
        });
    }

    if (platform === 'linux') {
        return response.json({
            url:
                'https://cdn.glitch.com/f52e5387-d62f-4b75-a3ae-3fb841c88f36%2FFire%20Sale-darwin-x64-v1.2.0.zip?1509384546668'
        });
    }
});

const listener = app.listen(process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});
