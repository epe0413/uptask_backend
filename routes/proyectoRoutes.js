import express from 'express';
import {
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyecto,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas
} from '../controllers/proyectoController.js'
import checkOut from '../middleware/checkAuth.js'

const router = express.Router();

router
    .route('/')
    .get(checkOut, obtenerProyectos)
    .post(checkOut, nuevoProyecto);

router
    .route('/:id')
    .get(checkOut, obtenerProyecto)
    .put(checkOut, editarProyecto)
    .delete(checkOut, eliminarProyecto);

router.get('/tarea/:id', checkOut, obtenerTareas);
router.post('/agregar-colaborador/:id', checkOut, agregarColaborador);
router.post ('/eliminar-colaborador/:id', checkOut, eliminarColaborador);

export default router;