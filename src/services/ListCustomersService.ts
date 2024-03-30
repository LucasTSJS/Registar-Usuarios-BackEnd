import prismaClient from "../prisma/prisma";

export class ListCustomersService {
    async execute() {

        const customers = await prismaClient.customer.findMany()

        return customers;
    }
}