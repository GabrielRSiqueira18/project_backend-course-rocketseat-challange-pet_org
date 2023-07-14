import { Pet, Prisma } from "@prisma/client";

export interface PetsRepository {
	create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
	findByCityName(cityName: string, stateName: string): Promise<Pet[]>
	findByCharacteristics(query: string): Promise<Pet[]>
	findByAge(petAge: number): Promise<Pet[]>
	findByPort(petPort: string): Promise<Pet[]>
	findByEnergyLevel(petEnergyLevel: string): Promise<Pet[]>
}