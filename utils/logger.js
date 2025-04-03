const fs = require('fs');
const path = require('path');

class Logger {
    constructor() {
        this.logDir = path.join(__dirname, '..', 'logs');
        this.logFile = path.join(this.logDir, 'app.log');
        this.ensureLogDirectory();
    }

    ensureLogDirectory() {
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir, { recursive: true });
        }
    }

    formatMessage(type, userId, action, details = {}) {
        const timestamp = new Date().toISOString();
        return JSON.stringify({
            timestamp,
            type,
            userId,
            action,
            details
        }) + '\n';
    }

    async log(type, userId, action, details = {}) {
        const logMessage = this.formatMessage(type, userId, action, details);
        try {
            await fs.promises.appendFile(this.logFile, logMessage);
        } catch (error) {
            console.error('Erro ao registrar log:', error);
        }
    }

    async userLogin(userId) {
        await this.log('AUTH', userId, 'LOGIN');
    }

    async userLogout(userId) {
        await this.log('AUTH', userId, 'LOGOUT');
    }

    async orderCreated(userId, orderId, orderDetails) {
        await this.log('ORDER', userId, 'CREATE', { orderId, ...orderDetails });
    }

    async orderUpdated(userId, orderId, orderDetails) {
        await this.log('ORDER', userId, 'UPDATE', { orderId, ...orderDetails });
    }

    async orderCanceled(userId, orderId) {
        await this.log('ORDER', userId, 'CANCEL', { orderId });
    }
}

module.exports = new Logger();