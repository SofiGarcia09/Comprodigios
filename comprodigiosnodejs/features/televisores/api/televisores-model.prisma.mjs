import { PrismaClient} from "@prisma/client";

export default class TelevisoresModelPrisma{
    #prismaClient;
    constructor(){ 
        this.#prismaClient = new PrismaClient();
    }
   
    async addTelevisor(televisores) {
        const respuesta = await this.#prismaClient.televisores.create({data: televisores})
        console.log(respuesta)

    }
    
    async getAllTelevisores() {
        return await this.#prismaClient.televisores.findMany();
    }

}