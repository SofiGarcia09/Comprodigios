import express from 'express';
import SucursalesModelPrisma from '../sucursales-model.prisma.mjs';
const { Router } = express;

export default class SucursalesController{

    #router = Router();
    #sucursalesModel = null;

    constructor(){
      this.#sucursalesModel = new SucursalesModelPrisma();
        this.registerRoutes();
    }

    getRouter(){
        return this.#router
    }
    registerRoutes(){
        const routerV1 = Router();
        routerV1.get(`/sucursales`,async(req,res) => await this.getAllSucursales(req,res));
        routerV1.post(`/sucursales`,async(req,res) => await this.createSucursal(req,res));

        this.#router.use('/v1', routerV1);
    }

    async getAllSucursales(req, res) {
      try {
        const sucursales = await this.#sucursalesModel.getAllSucursales();
        res.json(sucursales);
      } catch (error) {
        console.error(`error: ${error}`);
      } 
  }
    async createSucursal(req, res) {
      try {
        const sucursal = req.body;
        console.info({sucursal});
        this.#sucursalesModel.addSucursal(sucursal)
        res.send('sucursal creada');
      } catch (error) {
        console.error(`error: ${error}`);
      } 
    }
}