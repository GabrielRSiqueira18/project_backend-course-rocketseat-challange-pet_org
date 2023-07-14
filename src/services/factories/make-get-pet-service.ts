import { PrismaPetsRepository } from "../../repositories/prisma/pets-repository";
import { GetPetService } from "../get-pet";

export function makeGetPetService() {
	const prismaPetRepository = new PrismaPetsRepository()
	const getPetService = new GetPetService(prismaPetRepository)

	return getPetService
}