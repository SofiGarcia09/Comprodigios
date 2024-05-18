import { PrismaClient} from "@prisma/client";

export default class ConsolasModelPrisma{
    #prismaClient;
    constructor(){ 
        this.#prismaClient = new PrismaClient();
    }
   
    async addConsola(consolas) {
        const respuesta = await this.#prismaClient.consolas.create({data: consolas})
        console.log(respuesta)

    }
    
    async getAllConsolas() {
        return await this.#prismaClient.consolas.findMany();
    }

}