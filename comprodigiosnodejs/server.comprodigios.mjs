import express, { json } from 'express';
import SucursalesController from './features/sucursales/api/v1/sucursales-controller.mjs';
import CiudadesController from './features/ciudades/api/v1/ciudades-controller.mjs';
const app = express();
app.use(json());

const sucursalesApiController = new SucursalesController();
app.use('/api/', sucursalesApiController.getRouter());

const ciudadesApiController = new CiudadesController();
app.use('/api/',ciudadesApiController.getRouter());

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}` );
});