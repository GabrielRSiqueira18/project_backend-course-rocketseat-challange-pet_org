import { Prisma } from "@prisma/client";
import { OrgRepository } from "../org-repository";
import { prisma } from "../../lib/prisma";

export class PrismaOrgsRepository implements OrgRepository {
	constructor() {}

	async create(data: Prisma.OrgUncheckedCreateInput) {
		const org = await prisma.org.create({
			data,
		})

		return org 
	}

	async findByEmail(email: string) {
		const org = await prisma.org.findUnique({
			where: {
				email,
			}
		})

		return org
	}

	async findById(id: string) {
		const org = await prisma.org.findUnique({
			where: {
				id,
			}
		})

		return org
	}

	
}