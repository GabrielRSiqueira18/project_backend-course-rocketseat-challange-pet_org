import { Pet, Prisma } from "@prisma/client";

export interface PetsRepository {
	create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
	findByCityName(cityName: string, stateName: string): Promise<Pet[]>
}