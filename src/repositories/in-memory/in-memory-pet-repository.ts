import { Pet, Prisma } from "@prisma/client";
import { PetsRepository } from "../pet-repository";
import { randomUUID } from "crypto";
import { GetResult } from "@prisma/client/runtime/library";

export class ImMemoryPetRepository implements PetsRepository {
	constructor() {}

	public items: Pet[] = []
	
	async create(data: Prisma.PetUncheckedCreateInput) {
		const pet: Pet = {
			id: randomUUID(),
			name: data.name,
			about: data.about,
			adopted_at: data.adopted_at ?? null,
			city: data.city,
			state: data.state,
			age: data.age,
			energy_level: data.energy_level,
			environment: data.environment,
			independency_level: data.independency_level,
			org_id: data.org_id,
			port: data.port
		}

		this.items.push(pet)

		return pet
	}
	
	async findByCityName(cityName: string, stateName: string) {
		const pets: Pet[] = this.items.filter(item => item.city.toLowerCase() === cityName.toLowerCase() && item.state.toLowerCase() === stateName.toLowerCase())

		return pets
	}
}