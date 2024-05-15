import express from 'express';
import SucursalesModel from '../sucursales-model.mjs';
const { Router } = express;

export default class SucursalesController{

    #router = Router();
    #sucursalesModel = null;

    constructor(){
        this.registerRoutes();
    }

    getRouter(){
        return this.#router
    }
    registerRoutes(){
        const routerV1 = Router();
        routerV1.get(`/sucursales`,async(req,res) => await this.getAllSucursales(req,res));

        this.#router.use('/v1', routerV1);
    }

    async getAllSucursales(req, res) {
        try {
          this.#sucursalesModel = new SucursalesModel();
          this.#sucursalesModel.connect();
          const sucursales = await this.#sucursalesModel.getAllSucursales();
          res.json(sucursales);
        } catch (error) {
          console.error(`error: ${error}`);
        } finally {
          this.#sucursalesModel.closeConnection();
        }
    }
}