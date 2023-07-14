import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryOrgsRepository } from '../../repositories/in-memory/in-memory-orgs-repository'
import { ImMemoryPetRepository } from '../../repositories/in-memory/in-memory-pet-repository'
import { hash } from 'bcryptjs'
import { FilterPetByEnergyLevelService } from '../filter-pet-by-energy-level';

let petsRepository: ImMemoryPetRepository
let orgsRepository: InMemoryOrgsRepository
let sut: FilterPetByEnergyLevelService

beforeEach(async () => {
	petsRepository = new ImMemoryPetRepository()
	orgsRepository = new InMemoryOrgsRepository()
	sut = new FilterPetByEnergyLevelService(petsRepository)

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

describe('Filter Pets By Energy Level Service', () => {
	it('should be list pets using energy level params', async () => {
		await petsRepository.create({
			name: 'Cazuza 1',
			about: 'Muito carinho 1',
			age: 10,
			city: 'Itatiba',
			state: 'São Paulo',
			energy_level: 'Alta 3',
			environment: 'Casa 1',
			independency_level: 'Muito 1',
			org_id: 'org-01',
			port: 'Grande'
		})

		await petsRepository.create({
			name: 'Cazuza 2',
			about: 'Muito carinho 2',
			age: 10,
			city: 'Itatiba',
			state: 'São Paulo',
			energy_level: 'Alta 2',
			environment: 'Casa 2',
			independency_level: 'Muito 2',
			org_id: 'org-01',
			port: 'Grande'
		})

		await petsRepository.create({
			name: 'Cazuza 3',
			about: 'Muito carinho 3',
			age: 20,
			city: 'Itatiba',
			state: 'São Paulo',
			energy_level: 'Alta 3',
			environment: 'Casa 3',
			independency_level: 'Muito 3',
			org_id: 'org-01',
			port: 'Grande'
		})

		const { pets } = await sut.execute({
			q: 'alta 3',
		})

		expect(pets).toHaveLength(2)
		expect(pets).toEqual([
			expect.objectContaining({
				name: 'Cazuza 1',
			}),
			expect.objectContaining({
				name: 'Cazuza 3',
			})
		])
	})
})	