import express from 'express';
import TelevisoresModelPrisma from '../televisores-model.prisma.mjs';
const { Router } = express;

export default class TelevisoresController{

    #router = Router();
    #televisoresModel = null;

    constructor(){
      this.#televisoresModel = new TelevisoresModelPrisma();
        this.registerRoutes();
    }

    getRouter(){
        return this.#router
    }
    registerRoutes(){
        const routerV1 = Router();
        routerV1.get(`/televisores`,async(req,res) => await this.getAllTelevisores(req,res));
        routerV1.post(`/televisores`,async(req,res) => await this.createTelevisor(req,res));


        this.#router.use('/v1', routerV1);
    }

    async getAllTelevisores(req, res) {
        try {
          const televisores = await this.#televisoresModel.getAllTelevisores();
          res.json(televisores);
        } catch (error) {
          console.error(`error: ${error}`);
        } 
    }

    async createTelevisor(req, res) {
      try {
        const televisor = req.body;
        console.info({televisor});
        this.#televisoresModel.addTelevisor(televisor)
        res.send('televisor creado');
      } catch (error) {
        console.error(`error: ${error}`);
      } 
    }
    
}