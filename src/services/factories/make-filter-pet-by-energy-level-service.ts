import { PrismaPetsRepository } from "../../repositories/prisma/pets-repository";
import { FilterPetByEnergyLevelService } from "../filter-pet-by-energy-level";

export function makeFilterPetByEnergyLevelService() {
	const prismaPetRepository = new PrismaPetsRepository()
	const filterPetByEnergyLevelService = new FilterPetByEnergyLevelService(prismaPetRepository)

	return filterPetByEnergyLevelService
}