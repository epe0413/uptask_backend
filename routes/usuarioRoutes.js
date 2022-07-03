import express from 'express'

const router = express.Router();

import { registrar, autenticar, confirmar } from '../controllers/usuarioController.js';

// Autenticación, registro y confirmación de usuarios
router.post('/', registrar); //Crea un nuevo usuario
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar)

export default router;