import { PrismaClient} from "@prisma/client";

export default class ComputadoresModelPrisma{
    #prismaClient;
    constructor(){ 
        this.#prismaClient = new PrismaClient();
    }
   
    async addComputador(computadores) {
        const respuesta = await this.#prismaClient.computadores.create({data: computadores})
        console.log(respuesta)

    }
    
    async getAllComputadores() {
        return await this.#prismaClient.computadores.findMany();
    }

}