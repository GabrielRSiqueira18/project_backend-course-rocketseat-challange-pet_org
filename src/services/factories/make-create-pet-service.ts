import { PrismaOrgsRepository } from "../../repositories/prisma/orgs-repository";
import { PrismaPetsRepository } from "../../repositories/prisma/pets-repository";
import { CreatePetService } from '../create-pet';

export function makeCreatePetService() {
	const prismaPetRepository = new PrismaPetsRepository()
	const prismaORgsRepository = new PrismaOrgsRepository()
	const createPetService = new CreatePetService(prismaPetRepository, prismaORgsRepository)

	return createPetService
}