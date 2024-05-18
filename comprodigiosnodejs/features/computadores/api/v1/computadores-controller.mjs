import express from 'express';
import ComputadoresModelPrisma from '../computadores-mode.prismal.mjs';
const { Router } = express;

export default class ComputadoresController{

    #router = Router();
    #computadoresModel = null;

    constructor(){
      this.#computadoresModel = new ComputadoresModelPrisma();
        this.registerRoutes();
    }

    getRouter(){
        return this.#router
    }
    registerRoutes(){
        const routerV1 = Router();
        routerV1.get(`/computadores`,async(req,res) => await this.getAllComputadores(req,res));
        routerV1.post(`/computadores`,async(req,res) => await this.createComputador(req,res));


        this.#router.use('/v1', routerV1);
    }

    async getAllComputadores(req, res) {
        try {
          const computadores = await this.#computadoresModel.getAllComputadores();
          res.json(computadores);
        } catch (error) {
          console.error(`error: ${error}`);
        } 
    }

    async createComputador(req, res) {
      try {
        const computador = req.body;
        console.info({computador});
        this.#computadoresModel.addComputador(computador)
        res.send('computador creado');
      } catch (error) {
        console.error(`error: ${error}`);
      } 
    }
    
}