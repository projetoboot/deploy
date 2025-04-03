const fs = require('fs').promises;
const path = require('path');
const { pool } = require('../database');

const LOG_FILE = path.join(__dirname, '..', '..', 'logs', 'audit.log');

async function saveLog(data) {
    const {
        usuario_id,
        restaurante_id,
        acao,
        ip_address,
        detalhes
    } = data;

    const client = await pool.connect();
    try {
        // Save to database
        await client.execute(
            `INSERT INTO audit_logs (usuario_id, restaurante_id, acao, ip_address, detalhes) 
             VALUES (?, ?, ?, ?, ?)`,
            [usuario_id, restaurante_id, acao, ip_address, JSON.stringify(detalhes)]
        );

        // Save to file
        const timestamp = new Date().toISOString();
        const logEntry = JSON.stringify({
            timestamp,
            usuario_id,
            restaurante_id,
            acao,
            ip_address,
            detalhes
        }) + '\n';

        await fs.appendFile(LOG_FILE, logEntry);
    } catch (error) {
        console.error('Erro ao salvar log:', error);
    } finally {
        client.release();
    }
}

module.exports = { saveLog };