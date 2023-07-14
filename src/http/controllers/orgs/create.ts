import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateOrgService } from "../../../services/factories/make-create-org-service";

export async function create(req: FastifyRequest, reply: FastifyReply) {
	const registerOrgSchema = z.object({
		name: z.string(),
		responsible_name: z.string(),
		email: z.string(),
		cep: z.string(),
		addres: z.string(),
		whatsapp: z.string(),
		password: z.string()
	})

	const { addres, cep, email, name, password, responsible_name, whatsapp } = registerOrgSchema.parse(req.body)

	const createOrg = makeCreateOrgService()

	await createOrg.execute({
		addres, 
		cep, 
		email,
		name, 
		password,
		responsible_name,
		whatsapp,
	})
	
	return reply.status(201).send()
}