const express = require('express');
const router = express.Router();

// Importando as rotas modulares
const authRoutes = require('./auth');
const dashboardRoutes = require('./dashboard');
const restauranteRoutes = require('./restaurante');

// Configurando as rotas
router.use('/', authRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', restauranteRoutes);

module.exports = router;