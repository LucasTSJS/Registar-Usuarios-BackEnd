import prismaClient from "../prisma/prisma";
import { CreateCustomerProps } from "../namespaces/CustomerProps.namespace"
/**
 * Classe Responsável por Cadastrar no Banco de Dados Novos Clientes
 */
class CreateCustomerService{
    async execute({ name, email }: CreateCustomerProps) {
        
        if(!name || !email) {
            throw new Error("Preencha todos os campos!")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })
        return { customer }
    }
}


export { CreateCustomerService }