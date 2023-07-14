import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreatePetService } from "../../../services/factories/make-create-pet-service";

export async function create(req: FastifyRequest, reply: FastifyReply) {
	const registerPetSchema = z.object({
		name: z.string(),
		about: z.string(),
		age: z.number(),
		city: z.string(),
		state: z.string(),
		port: z.string(),
		energy_level: z.string(),
		independency_level: z.string(),
		environment: z.string(),
		orgId: z.string(),
	})

	const { about, age, city, energy_level, environment, independency_level, name, port, state, orgId } = registerPetSchema.parse(req.body)

	const createPet = makeCreatePetService()

	await createPet.execute({
		about,
		age, 
		city,
		energy_level,
		environment,
		independency_level, 
		name,
		orgId,
		port,
		state,
	})
	
	return reply.status(201).send()
}