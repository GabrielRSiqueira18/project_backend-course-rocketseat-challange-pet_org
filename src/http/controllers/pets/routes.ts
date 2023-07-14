import { FastifyInstance } from "fastify";
import { create } from "./create";
import { filterPetByAge } from "./filter-pet-by-age";

export async function petsRoutes(app: FastifyInstance) {
	app.post('/pets', create)
	app.get('/pets/:age', filterPetByAge)
}