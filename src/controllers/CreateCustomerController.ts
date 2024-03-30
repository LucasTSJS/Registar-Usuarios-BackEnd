import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService"

/**
 * Classe Responsável por controlar a requisição feita, manipulando dados de entrada e chamando o Serviço
 */
class CreateCustomerController {
    async handle(request: FastifyRequest, reply:FastifyReply) {

        const { name, email } = request.body as { name: string, email: string }; // nome e email que são necessários no cadastro via POST

        const customerService = new CreateCustomerService()
        const customer = await customerService.execute({name, email})

        reply.send(customer) // É o retorno no Insomnia de uma requisição feita via POST. Neste caso ela retorna o customer
    }
}

export { CreateCustomerController }