import { PrismaPetsRepository } from "../../repositories/prisma/pets-repository";
import { FilterPetByAgeService } from '../filter-pet-by-age';

export function makeFilterPetByAgeService() {
	const prismaPetRepository = new PrismaPetsRepository()
	const filterPetByAgeService = new FilterPetByAgeService(prismaPetRepository)

	return filterPetByAgeService
}