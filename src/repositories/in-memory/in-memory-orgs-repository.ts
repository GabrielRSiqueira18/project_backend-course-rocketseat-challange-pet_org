import { Org, Prisma } from "@prisma/client";
import { OrgRepository } from "../org-repository";
import { randomUUID } from "crypto";

export class InMemoryOrgsRepository implements OrgRepository {
	constructor() {}
	
	public items: Org[] = []

	async create(data: Prisma.OrgUncheckedCreateInput) {
		const org: Org = {
			id: data.id ?? randomUUID(),
			name: data.name,
			responsible_name: data.responsible_name,
			addres: data.addres,
			cep: data.cep,
			email: data.email,
			password_hash: data.password_hash,
			whatsapp: data.whatsapp,
		}
	
		this.items.push(org)

		return org 
	}

	async findById(id: string) {
		const org = this.items.find(item => item.id === id)

		if(!org) {
			return null
		}

		return org
	}

	async findByEmail(email: string) {
		const org = this.items.find(item => item.email === email)

		if(!org) {
			return null
		}

		return org
	}
}
	
