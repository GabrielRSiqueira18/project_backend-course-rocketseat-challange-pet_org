import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrgsRepository } from '../../repositories/in-memory/in-memory-orgs-repository'
import { CreateOrgService } from '../create-org'
import { OrgArleayExistError } from '../error/org-arleady-exist-error'

let orgsRepository: InMemoryOrgsRepository
let sut: CreateOrgService

beforeEach(() => {
	orgsRepository = new InMemoryOrgsRepository()
	sut = new CreateOrgService(orgsRepository)
})

describe('Create Org Service', () => {
	it('should be create a new org', async () => {
		const { org } = await sut.execute({
			name: 'Special Org',
			responsible_name: 'Gabriel',
			addres: 'Avenida Campinas',
			cep: '12500-30',
			email: 'gabriel@gmail.com',
			password: '123456',
			whatsapp: '11910518642',
		})

		expect(org.id).toEqual(expect.any(String))
	})

	it('should be not allowed to create a new org with the same email', async () => {
		await sut.execute({
			name: 'Special Org',
			responsible_name: 'Gabriel',
			addres: 'Avenida Campinas',
			cep: '12500-30',
			email: 'gabriel@gmail.com',
			password: '123456',
			whatsapp: '11910518642',
		})

		await expect(() => sut.execute({
			name: 'Special Org',
			responsible_name: 'Gabriel',
			addres: 'Avenida Campinas',
			cep: '12500-30',
			email: 'gabriel@gmail.com',
			password: '123456',
			whatsapp: '11910518642',
		})).rejects.toBeInstanceOf(OrgArleayExistError)
	})
})