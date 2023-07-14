import { Pet } from "@prisma/client"
import { PetsRepository } from '../repositories/pet-repository';

interface ListPetsAbleToadoptionInCityRequest {
	petCity: string
	petState: string
}

interface ListPetsAbleToadoptionInCityResponse {
	pets: Pet[]
}

export class ListPetsAbleToadoptionInCityService {
	constructor(
		private petsRepository: PetsRepository,
	) {}

	async execute({ petCity, petState }: ListPetsAbleToadoptionInCityRequest): Promise<ListPetsAbleToadoptionInCityResponse> {
		const pets = await this.petsRepository.findByCityName(petCity, petState)

		return { pets } 
	}
}