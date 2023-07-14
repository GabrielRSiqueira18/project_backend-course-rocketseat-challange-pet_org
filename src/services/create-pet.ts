import { Pet } from "@prisma/client"
import { PetsRepository } from '../repositories/pet-repository';
import { OrgRepository } from "../repositories/org-repository";

interface CreatePetServiceRequest {
	name: string
	about: string
	age: number
	port: string
	energy_level: string
	independency_level: string
	environment: string
	orgId: string
}

interface CreatePetServiceRespone {
	pet: Pet
}

export class CreatePetService {
	constructor(
		private petsRepository: PetsRepository,
		private orgsRepository: OrgRepository
	) {}

	async execute({ about, age, energy_level, environment, independency_level, name, orgId, port }:CreatePetServiceRequest): Promise<CreatePetServiceRespone> {
		const org = await this.orgsRepository.findById(orgId)

		if(!org) {
			throw new Error()
		}

		const pet = await this.petsRepository.create({
			name,
			about,
			age,
			energy_level,
			environment, 
			independency_level, 
			port,
			adopted_at: null,
			org_id: org.id
		}) 

		return { pet }
	}
}