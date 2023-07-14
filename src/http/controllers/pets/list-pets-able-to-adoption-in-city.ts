import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeListPetsAbleToadoptionInCityService } from "../../../services/factories/make-list-pets-able-to-adoption-in-city-service";

export async function listPetsAbleToadoptionInCity(req: FastifyRequest, reply: FastifyReply) {
	const istPetsAbleToadoptionInCityParams = z.object({
		city: z.string(),
	})

	const { city } = istPetsAbleToadoptionInCityParams.parse(req.params)

	const listPetsAbleToadoptionInCityService = makeListPetsAbleToadoptionInCityService()

	const { pets } = await listPetsAbleToadoptionInCityService.execute({
		petCity: city,
	})
	
	return reply.status(200).send({ pets })
}