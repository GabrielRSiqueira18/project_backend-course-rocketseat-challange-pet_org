import { FastifyReply, FastifyRequest } from "fastify";
import { makeFilterPetByAgeService } from "../../../services/factories/make-filter-pet-by-age-service";
import { z } from "zod";

export async function filterPetByAge(req: FastifyRequest, reply: FastifyReply) {
	const filterPetByAgeParams = z.object({
		age: z.string(),
	})

	const { age } = filterPetByAgeParams.parse(req.params)

	const filterPetByAge = makeFilterPetByAgeService()

	const { pets } = await filterPetByAge.execute({
		q: Number(age),
	})
	
	return reply.status(200).send({ pets })
}