import express from 'express';
import MetodoPagoModelPrisma from '../metodoPago-model.prisma.mjs';
const { Router } = express;

export default class MetodoPagoController{

    #router = Router();
    #metodoPagoModel = null;

    constructor(){
      this.#metodoPagoModel = new MetodoPagoModelPrisma();
        this.registerRoutes();
    }

    getRouter(){
        return this.#router
    }
    registerRoutes(){
        const routerV1 = Router();
        routerV1.get(`/metodoPago`,async(req,res) => await this.getAllMetodoPago(req,res));
        routerV1.post(`/metodoPago`,async(req,res) => await this.createMetodoPago(req,res));

        this.#router.use('/v1', routerV1);
    }

    async getAllMetodoPago(req, res) {
      try {
        const metodoPago = await this.#metodoPagoModel.getAllMetodoPago();
        res.json(metodoPago);
      } catch (error) {
        console.error(`error: ${error}`);
      } 
  }
  async createMetodoPago(req, res) {
    try {
      const metodoPago = req.body;
      console.info({metodoPago});
      await this.#metodoPagoModel.addMetodoPago(metodoPago); 
      res.send('metodo de pago creado');
    } catch (error) {
      console.error(`error: ${error}`);
    } 
  }
  
}