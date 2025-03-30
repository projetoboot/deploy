const ngrok = require('ngrok');

async function startNgrok() {
    try {
        const url = await ngrok.connect({
            proto: 'http',
            addr: 3000, // Your app's port
            region: 'sa' // South America region for better latency
        });
        console.log('Ngrok tunnel created:', url);
        console.log('Admin Interface:', 'http://127.0.0.1:4040');
    } catch (error) {
        console.error('Error creating ngrok tunnel:', error);
    }
}

module.exports = startNgrok;