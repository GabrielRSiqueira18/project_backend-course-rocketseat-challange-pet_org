import { Org } from "@prisma/client";
import { OrgRepository } from "../repositories/org-repository";
import { hash } from 'bcryptjs'
import { OrgArleayExistError } from "./error/org-arleady-exist-error";

interface CreateOrgServiceRequest {
	name: string
	responsible_name: string
	email: string
	cep: string
	addres: string
	whatsapp: string
	password: string
}

interface CreateOrgServiceResponse {
	org: Org
}

export class CreateOrgService {
	constructor(private orgsRepository: OrgRepository) {}

	async execute({ addres, cep, email, name, password, responsible_name, whatsapp }: CreateOrgServiceRequest): Promise<CreateOrgServiceResponse> {
		const password_hash = await hash(password, 6)

		const orgWithSameEmail = await this.orgsRepository.findByEmail(email)

		if(orgWithSameEmail) {
			throw new OrgArleayExistError()
		}

		const org = await this.orgsRepository.create({
			addres, 
			cep, 
			email,
			name, 
			password_hash,
			responsible_name,
			whatsapp,		
		})

		return { org }
	}
}