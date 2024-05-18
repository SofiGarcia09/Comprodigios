import { PrismaClient} from "@prisma/client";

export default class MetodoPagoModelPrisma{
    #prismaClient;
    constructor(){ 
        this.#prismaClient = new PrismaClient();
    }
   
    async addMetodoPago(metodoPago) {
        const respuesta = await this.#prismaClient.metodoPago.create({data: metodoPago})
        console.log(respuesta)

    }
    
    async getAllMetodoPago() {
        return await this.#prismaClient.metodoPago.findMany();
    }

}