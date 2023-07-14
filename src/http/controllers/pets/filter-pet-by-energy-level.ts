import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeFilterPetByEnergyLevelService } from "../../../services/factories/make-filter-pet-by-energy-level-service";

export async function filterPetByEnergyLevel(req: FastifyRequest, reply: FastifyReply) {
	const filterPetByEnergyLevelParams = z.object({
		eneryLevel: z.string(),
	})

	const { eneryLevel } = filterPetByEnergyLevelParams.parse(req.params)

	const filterPetByEnergyLevel = makeFilterPetByEnergyLevelService()

	const { pets } = await filterPetByEnergyLevel.execute({
		q: eneryLevel,
	})
	
	return reply.status(200).send({ pets })
}