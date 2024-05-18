import { PrismaClient} from "@prisma/client";

export default class CelularesModelPrisma{
    #prismaClient;
    constructor(){ 
        this.#prismaClient = new PrismaClient();
    }
   
    async addCelular(celulares) {
        const respuesta = await this.#prismaClient.celulares.create({data: celulares})
        console.log(respuesta)

    }
    
    async getAllCelulares() {
        return await this.#prismaClient.celulares.findMany();
    }

}