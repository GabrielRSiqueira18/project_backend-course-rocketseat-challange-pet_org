import { PrismaPetsRepository } from "../../repositories/prisma/pets-repository";
import { FilterPetByPortService } from '../filter-pet-by-port';

export function makeFilterPetByPortService() {
	const prismaPetRepository = new PrismaPetsRepository()
	const filterPetByPortService = new FilterPetByPortService(prismaPetRepository)

	return filterPetByPortService
}