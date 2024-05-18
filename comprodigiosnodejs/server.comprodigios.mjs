import express, { json } from 'express';
import SucursalesController from './features/sucursales/api/v1/sucursales-controller.mjs';
import CiudadesController from './features/ciudades/api/v1/ciudades-controller.mjs';
import MetodoPagoController from './features/metodoPago/api/v1/metodoPago-controller.mjs';
import CelularesController from './features/celulares/api/v1/celulares-controller.mjs';
import ComputadoresController from './features/computadores/api/v1/computadores-controller.mjs';
import TelevisoresController from './features/televisores/api/v1/televisores-controller.mjs';
import ConsolasController from './features/consolas/api/v1/consolas.controller.mjs';
const app = express();
app.use(json());

const sucursalesApiController = new SucursalesController();
app.use('/api/', sucursalesApiController.getRouter());

const ciudadesApiController = new CiudadesController();
app.use('/api/',ciudadesApiController.getRouter());

const metodoPagoApiController = new MetodoPagoController();
app.use('/api/', metodoPagoApiController.getRouter());

const celularesApiController = new CelularesController();
app.use('/api/', celularesApiController.getRouter());

const computadoresApiController = new ComputadoresController();
app.use('/api/', computadoresApiController.getRouter());

const televisoresApiController = new TelevisoresController();
app.use('/api/', televisoresApiController.getRouter());

const consolasApiController = new ConsolasController();
app.use('/api/', consolasApiController.getRouter());


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}` );
});