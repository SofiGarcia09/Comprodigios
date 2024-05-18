import express from 'express';
import CiudadesModelPrisma from '../ciudades-model.prisma.mjs';
const { Router } = express;

export default class CiudadesController{

    #router = Router();
    #ciudadesModel = null;

    constructor(){
      this.#ciudadesModel = new CiudadesModelPrisma();
        this.registerRoutes();
    }

    getRouter(){
        return this.#router
    }
    registerRoutes(){
        const routerV1 = Router();
        routerV1.get(`/ciudades`,async(req,res) => await this.getAllCiudades(req,res));
        routerV1.post(`/ciudades`,async(req,res) => await this.createCiudad(req,res));


        this.#router.use('/v1', routerV1);
    }

    async getAllCiudades(req, res) {
        try {
          const ciudades = await this.#ciudadesModel.getAllCiudades();
          res.json(ciudades);
        } catch (error) {
          console.error(`error: ${error}`);
        } 
    }

    async createCiudad(req, res) {
      try {
        const ciudad = req.body;
        console.info({ciudad});
        this.#ciudadesModel.addCiudad(ciudad)
        res.send('ciudad creada');
      } catch (error) {
        console.error(`error: ${error}`);
      } 
    }
    
}