import { PrismaOrgsRepository } from "../../repositories/prisma/orgs-repository";
import { CreateOrgService } from "../create-org";

export function makeCreateOrgService() {
	const orgRepository = new PrismaOrgsRepository()
	const createOrgService = new CreateOrgService(orgRepository)

	return createOrgService
}