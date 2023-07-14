import { Prisma } from "@prisma/client";
import { PetsRepository } from "../pet-repository";
import { prisma } from "../../lib/prisma";

export class PrismaPetsRepository implements PetsRepository {
	async create(data: Prisma.PetUncheckedCreateInput) {
		const pet = await prisma.pet.create({
			data,
		})

		return pet
	}

	async findById(petId: string) {
		const pet = await prisma.pet.findUnique({
			where: {
				id: petId
			}
		})

		return pet
	}

	async findByCityName(cityName: string, stateName: string) {
		const pets = await prisma.pet.findMany({
			where: {
				city: cityName,
				state: stateName,
			}
		})

		return pets
	}

	async findByAge(petAge: number) {
		const pets = await prisma.pet.findMany({
			where: {
				age: petAge
			}
		})

		return pets
	}

	async findByPort(petPort: string) {
		const pets = await prisma.pet.findMany({
			where: {
				port: petPort
			}
		})

		return pets
	}

	async findByEnergyLevel(petEnergyLevel: string) {
		const pets = await prisma.pet.findMany({
			where: {
				energy_level: petEnergyLevel
			}
		})

		return pets
	}
}