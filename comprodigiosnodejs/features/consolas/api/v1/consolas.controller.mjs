import express from 'express';
import ConsolasModelPrisma from '../consolas-model,prisma.mjs';
const { Router } = express;

export default class ConsolasController{

    #router = Router();
    #consolasModel = null;

    constructor(){
      this.#consolasModel = new ConsolasModelPrisma();
        this.registerRoutes();
    }

    getRouter(){
        return this.#router
    }
    registerRoutes(){
        const routerV1 = Router();
        routerV1.get(`/consolas`,async(req,res) => await this.getAllConsolas(req,res));
        routerV1.post(`/consolas`,async(req,res) => await this.createConsola(req,res));


        this.#router.use('/v1', routerV1);
    }

    async getAllConsolas(req, res) {
        try {
          const consola= await this.#consolasModel.getAllConsolas();
          res.json(consola);
        } catch (error) {
          console.error(`error: ${error}`);
        } 
    }

    async createConsola(req, res) {
      try {
        const consola = req.body;
        console.info({consola});
        this.#consolasModel.addConsola(consola)
        res.send('consola creada');
      } catch (error) {
        console.error(`error: ${error}`);
      } 
    }
    
}