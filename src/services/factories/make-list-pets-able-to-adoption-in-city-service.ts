import { PrismaPetsRepository } from "../../repositories/prisma/pets-repository";
import { ListPetsAbleToadoptionInCityService } from "../list-pets-able-to-adoption-in-city";

export function makeListPetsAbleToadoptionInCityService() {
	const prismaPetRepository = new PrismaPetsRepository()
	const listPetsAbleToadoptionInCityService = new ListPetsAbleToadoptionInCityService(prismaPetRepository)

	return listPetsAbleToadoptionInCityService
}