import { Pet } from "@prisma/client"
import { PetsRepository } from '../repositories/pet-repository';

interface FilterPetByPortRequest {
	q: string
}

interface FilterPetByPortResponse {
	pets: Pet[]
}

export class FilterPetByPortService {
	constructor(private petsRepository: PetsRepository) {}

	async execute({ q }: FilterPetByPortRequest): Promise<FilterPetByPortResponse> {
		const pets = await this.petsRepository.findByPort(q)

		return { pets }
	}
}