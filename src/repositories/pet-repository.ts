import { Pet, Prisma } from "@prisma/client";

export interface PetsRepository {
	create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
	findById(petId: string): Promise<Pet | null>
	findByCityName(cityName: string): Promise<Pet[]>
	findByAge(petAge: number): Promise<Pet[]>
	findByPort(petPort: string): Promise<Pet[]>
	findByEnergyLevel(petEnergyLevel: string): Promise<Pet[]>
}