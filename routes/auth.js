const User = require('../models/user');
const logger = require('../utils/logger');
const express = require('express');
const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
    try {
        const { phone, password } = req.body;
        const user = await User.findOne({ tell: phone });

        if (!user || !user.comparePassword(password)) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        req.session.userId = user.id;
        await logger.userLogin(user.id);
        res.json({ success: true });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Rota de logout
router.post('/logout', async (req, res) => {
    if (req.session.userId) {
        await logger.userLogout(req.session.userId);
        req.session.destroy();
    }
    res.json({ success: true });
});

// Add this new route
router.get('/check-phone', async (req, res) => {
    try {
        const phone = req.query.phone;
        
        // Validate phone format
        if (!phone || phone.length < 10 || phone.length > 11) {
            return res.status(400).json({ error: 'Invalid phone number format' });
        }

        // Check if phone exists in database
        const existingUser = await User.findOne({ tell: phone });
        
        res.json({
            available: !existingUser
        });
    } catch (error) {
        console.error('Error checking phone availability:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ... rest of your routes ...