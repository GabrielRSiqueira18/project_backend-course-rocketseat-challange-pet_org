import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrgsRepository } from '../../repositories/in-memory/in-memory-orgs-repository'
import { ImMemoryPetRepository } from '../../repositories/in-memory/in-memory-pet-repository'
import { CreatePetService } from '../create-pet'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from '../error/invalid-credentials-error'

let petsRepository: ImMemoryPetRepository
let orgsRepository: InMemoryOrgsRepository
let sut: CreatePetService

beforeEach(async () => {
	petsRepository = new ImMemoryPetRepository()
	orgsRepository = new InMemoryOrgsRepository()
	sut = new CreatePetService(petsRepository, orgsRepository)

	await orgsRepository.create({
		id: 'org-01',
		name: 'Special Org',
		responsible_name: 'Gabriel',
		addres: 'Avenida Campinas',
		cep: '12500-30',
		email: 'org@gmail.com',
		password_hash: await hash('123456', 6),
		whatsapp: '11910518642',
	})
})

describe('Create Pet Service', () => {
	it('should be create a new pet', async () => {
		const { pet } = await sut.execute({
			name: 'Cazuza',
			about: 'Muito carinho',
			age: 10,
			city: 'Itatiba',
			state: 'São Paulo',
			energy_level: 'Alta',
			environment: 'Casa',
			independency_level: 'Muito',
			orgId: 'org-01',
			port: 'Grande'
		})

		expect(pet.id).toEqual(expect.any(String))
		expect(pet.org_id).toEqual('org-01')
	})

	it('should be not create a new pet with inexistent org', async () => {
		await expect(() => sut.execute({
			name: 'Cazuza',
			about: 'Muito carinho',
			age: 10,
			city: 'Itatiba',
			state: 'São Paulo',
			energy_level: 'Alta',
			environment: 'Casa',
			independency_level: 'Muito',
			orgId: 'org id inexistent',
			port: 'Grande'
		})).rejects.toBeInstanceOf(InvalidCredentialsError)
	})
})	