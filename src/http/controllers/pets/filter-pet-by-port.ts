import { FastifyReply, FastifyRequest } from "fastify";
import { makeFilterPetByAgeService } from "../../../services/factories/make-filter-pet-by-age-service";
import { z } from "zod";
import { makeFilterPetByPortService } from "../../../services/factories/make-filter-pet-by-port";

export async function filterPetByPort(req: FastifyRequest, reply: FastifyReply) {
	const filterPetByPortParams = z.object({
		port: z.string(),
	})

	const { port } = filterPetByPortParams.parse(req.params)

	const filterPetByPort = makeFilterPetByPortService()

	const { pets } = await filterPetByPort.execute({
		q: port,
	})
	
	return reply.status(200).send({ pets })
}