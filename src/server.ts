import Fastify, { FastifyListenOptions } from "fastify";
import cors from '@fastify/cors';
import { routes } from "./routes";

/**
 * Função Responsável por incializar o Servidor
 */
const app = Fastify({ logger:true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message }) // Essa mensagem é trazida do Throw que é dado quando não é preenchido um nome ou email!
})
const start = async () => {

    await app.register(cors)
    await app.register(routes); // Estou registrando a rota criada no Servidor!
    
    try {
        await app.listen({ port: 9001 })
    } catch(err) {
        process.exit(1)
    }
}

start();
// const port = process.env