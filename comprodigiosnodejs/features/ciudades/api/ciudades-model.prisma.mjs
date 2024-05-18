import { PrismaClient} from "@prisma/client";

export default class CiudadesModelPrisma{
    #prismaClient;
    constructor(){ 
        this.#prismaClient = new PrismaClient();
    }
   
    async addCiudad(ciudades) {
        const respuesta = await this.#prismaClient.ciudades.create({data: ciudades})
        console.log(respuesta)

    }
    
    async getAllCiudades() {
        return await this.#prismaClient.ciudades.findMany();
    }

}