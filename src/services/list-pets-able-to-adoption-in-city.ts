import { Pet } from "@prisma/client"
import { PetsRepository } from '../repositories/pet-repository';

interface ListPetsAbleToadoptionInCityRequest {
	petCity: string
}

interface ListPetsAbleToadoptionInCityResponse {
	pets: Pet[]
}

export class ListPetsAbleToadoptionInCityService {
	constructor(
		private petsRepository: PetsRepository,
	) {}

	async execute({ petCity }: ListPetsAbleToadoptionInCityRequest): Promise<ListPetsAbleToadoptionInCityResponse> {
		const pets = await this.petsRepository.findByCityName(petCity)

		return { pets } 
	}
}