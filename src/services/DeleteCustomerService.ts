import prismaClient from "../prisma/prisma";
import { DeleteCustomerProps } from "../namespaces/CustomerProps.namespace";

export class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {

        if(!id) {
            throw new Error("Solicitação Invalida")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustomer) {
            throw new Error("Cliente não existe!")
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Deletado com sucesso" }
    }
}