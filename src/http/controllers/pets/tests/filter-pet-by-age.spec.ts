import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from 'supertest'
import { app } from "../../../../app";
import { prisma } from "../../../../lib/prisma";
import { hash } from "bcryptjs";

beforeAll(async () => {
	await app.ready()
})

afterAll(async () => {
	await app.close()
})

describe('Create Pet Controller', () => {
	it('should be create a pet', async () => {
		await prisma.org.create({
			data: {
				id: '123456',
				name: 'Special Org 2',
				responsible_name: 'Gabriel',
				addres: 'Avenida Campinas',
				cep: '12500-30',
				email: 'gabriel2@gmail.com',
				password_hash: await hash('123456', 6),
				whatsapp: '11910518642',
			}
		})

		await prisma.pet.create({
			data: {
				id: '12',
				adopted_at: null,
				name: 'Cazuza',
				about: 'Muito carinho',
				age: 10,
				city: 'Itatiba',
				state: 'São Paulo',
				energy_level: 'Alta',
				environment: 'Casa',
				independency_level: 'Muito',
				org_id: '123456',
				port: 'Grande'
			}
		})

		await prisma.pet.create({
			data: {
				id: '122',
				adopted_at: null,
				name: 'Cazuza 2',
				about: 'Muito carinho 2',
				age: 10,
				city: 'Itatiba 2',
				state: 'São Paulo 2',
				energy_level: 'Alta 2',
				environment: 'Casa 2',
				independency_level: 'Muito 2',
				org_id: '123456',
				port: 'Grande 2'
			}
		})

		await prisma.pet.create({
			data: {
				id: '1223',
				adopted_at: null,
				name: 'Cazuza 3',
				about: 'Muito carinho 3',
				age: 102,
				city: 'Itatiba 3',
				state: 'São Paulo 3',
				energy_level: 'Alta 3',
				environment: 'Casa 3',
				independency_level: 'Muito 3',
				org_id: '123456',
				port: 'Grande3'
			}
		})

		const response = await request(app.server)
			.get('/pets/10')

		expect(response.statusCode).toEqual(200)
		expect(response.body.pets).toHaveLength(2)
		expect(response.body.pets).toEqual([
			expect.objectContaining({
				name: 'Cazuza',
				about: 'Muito carinho',
			}),
			expect.objectContaining({
				name: 'Cazuza 2',
				about: 'Muito carinho 2',
			}),
		])
	})
})