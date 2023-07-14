import { FastifyInstance } from "fastify";
import { create } from "./create";
import { filterPetByAge } from "./filter-pet-by-age";
import { filterPetByPort } from "./filter-pet-by-port";
import { filterPetByEnergyLevel } from "./filter-pet-by-energy-level";
import { listPetsAbleToadoptionInCity } from "./list-pets-able-to-adoption-in-city";

export async function petsRoutes(app: FastifyInstance) {
	app.post('/pets', create)
	app.get('/pets/filter/age/:age', filterPetByAge)
	app.get('/pets/filter/port/:port', filterPetByPort)
	app.get('/pets/filter/energy-level/:eneryLevel', filterPetByEnergyLevel)
	app.get('/pets/filter/city/:city', listPetsAbleToadoptionInCity)
}