import { Pet, Prisma } from "@prisma/client";
import { PetsRepository } from "../pet-repository";
import { randomUUID } from "crypto";
import { GetResult } from "@prisma/client/runtime/library";

export class ImMemoryPetRepository implements PetsRepository {
	constructor() {}

	public items: Pet[] = []
	
	async create(data: Prisma.PetUncheckedCreateInput) {
		const pet: Pet = {
			id: data.id ?? randomUUID(),
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
	
	async findById(petId: string) {
		const pet = this.items.find(item => item.id === petId)

		if(!pet) {
			return null
		}

		return pet
	}

	async findByCityName(cityName: string, stateName: string) {
		const pets: Pet[] = this.items.filter((item) => {
			const itemCityNameLowerCase = item.city.toLowerCase()
			const itemStateNameLowerCase = item.state.toLowerCase()
			const paramsCityNameLowerCase = cityName.toLowerCase()
			const paramsStateNameLowerCase = stateName.toLowerCase()
			const isPetAbleToAdopt = item.adopted_at === null ? true : false

			return (itemCityNameLowerCase === paramsCityNameLowerCase) && (itemStateNameLowerCase === paramsStateNameLowerCase) && isPetAbleToAdopt
		})

		return pets
	}

	async findByAge(petAge: number) {
		const pets = this.items.filter(item => item.age === petAge)

		return pets
	}

	async findByPort(petPort: string) {
		const pets = this.items.filter(item => item.port.toLowerCase() === petPort.toLowerCase())

		return pets
	}

	async findByEnergyLevel(petEnergyLevel: string) {
		const pets = this.items.filter(item => item.energy_level.toLowerCase() === petEnergyLevel.toLowerCase())

		return pets
	}
}