import { Pet, Prisma } from "@prisma/client";
import { PetsRepository } from "../pet-repository";
import { randomUUID } from "crypto";

export class ImMemoryPetRepository implements PetsRepository {
	constructor() {}

	public items: Pet[] = []
	
	async create(data: Prisma.PetUncheckedCreateInput) {
		const pet: Pet = {
			id: randomUUID(),
			name: data.name,
			about: data.about,
			adopted_at: data.adopted_at ?? null,
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
}