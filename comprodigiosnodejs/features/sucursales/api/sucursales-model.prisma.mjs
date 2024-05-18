import { PrismaClient} from "@prisma/client";

export default class SucursalesModelPrisma{
    #prismaClient;
    constructor(){ 
        this.#prismaClient = new PrismaClient();
    }
   
    async addSucursal(sucursales) {
        const respuesta = await this.#prismaClient.sucursales.create({data: sucursales})
        console.log(respuesta)

    }
    
    async getAllSucursales() {
        return await this.#prismaClient.sucursales.findMany();
    }

}
