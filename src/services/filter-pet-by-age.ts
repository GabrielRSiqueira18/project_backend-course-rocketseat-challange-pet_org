import { Pet } from "@prisma/client"
import { PetsRepository } from '../repositories/pet-repository';

interface FilterPetByAgeRequest {
	q: number
}

interface FilterPetByAgeResponse {
	pets: Pet[]
}

export class FilterPetByAgeService {
	constructor(private petsRepository: PetsRepository) {}

	async execute({ q }: FilterPetByAgeRequest): Promise<FilterPetByAgeResponse> {
		const pets = await this.petsRepository.findByAge(q)

		return { pets }
	}
}