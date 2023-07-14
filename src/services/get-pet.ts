import { Pet } from "@prisma/client"
import { PetsRepository } from '../repositories/pet-repository';

interface GetPetServiceRequest {
	id: string
}

interface GetPetServiceResponse {
	pet: Pet
}

export class GetPetService {
	constructor(private petsRepository: PetsRepository) {}

	async execute({ id }: GetPetServiceRequest): Promise<GetPetServiceResponse> {
		const pet = await this.petsRepository.findById(id)

 		if(!pet) {
			throw new Error()
		}

		return { pet } 
	}
}