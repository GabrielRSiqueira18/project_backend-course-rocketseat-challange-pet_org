import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(req: FastifyRequest, res: FastifyReply) {
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

	
}