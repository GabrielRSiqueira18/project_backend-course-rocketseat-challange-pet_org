import { Pet } from "@prisma/client"
import { PetsRepository } from '../repositories/pet-repository';

interface FilterPetByEnergyLevelRequest {
	q: string
}

interface FilterPetByEnergyLevelResponse {
	pets: Pet[]
}

export class FilterPetByEnergyLevelService {
	constructor(private petsRepository: PetsRepository) {}

	async execute({ q }: FilterPetByEnergyLevelRequest): Promise<FilterPetByEnergyLevelResponse> {
		const pets = await this.petsRepository.findByEnergyLevel(q)

		return { pets }
	}
}