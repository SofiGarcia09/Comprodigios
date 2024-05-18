import express from 'express';
import CelularesModelPrisma from '../celulares-model.prisma.mjs';
const { Router } = express;

export default class CelularesController{

    #router = Router();
    #celularesModel = null;

    constructor(){
      this.#celularesModel = new CelularesModelPrisma();
        this.registerRoutes();
    }

    getRouter(){
        return this.#router
    }
    registerRoutes(){
        const routerV1 = Router();
        routerV1.get(`/celulares`,async(req,res) => await this.getAllCelulares(req,res));
        routerV1.post(`/celulares`,async(req,res) => await this.createCelulares(req,res));


        this.#router.use('/v1', routerV1);
    }

    async getAllCelulares(req, res) {
        try {
          const celulares = await this.#celularesModel.getAllCelulares();
          res.json(celulares);
        } catch (error) {
          console.error(`error: ${error}`);
        } 
    }

    async createCelulares(req, res) {
      try {
        const celular = req.body;
        console.info({celular});
        this.#celularesModel.addCelular(celular)
        res.send('celular creado');
      } catch (error) {
        console.error(`error: ${error}`);
      } 
    }
    
}