import { Pet } from "@prisma/client"
import { PetsRepository } from '../repositories/pet-repository';

interface FilterPetByCharacteristicsRequest {
	q: string
}

interface FilterPetByCharacteristicsResponse {
	pets: Pet[]
}

export class FilterPetByCharacteristicsService {
	constructor(private petsRepository: PetsRepository) {}

	async execute({ q }: FilterPetByCharacteristicsRequest): Promise<FilterPetByCharacteristicsResponse> {
		const pets = await this.petsRepository.findByCharacteristics(q)

		return { pets }
	}
}