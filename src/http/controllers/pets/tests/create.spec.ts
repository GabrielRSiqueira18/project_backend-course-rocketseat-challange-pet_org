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

		const response = await request(app.server)
			.post('/pets')
			.send({
				name: 'Cazuza',
				about: 'Muito carinho',
				age: 10,
				city: 'Itatiba',
				state: 'São Paulo',
				energy_level: 'Alta',
				environment: 'Casa',
				independency_level: 'Muito',
				orgId: '123456',
				port: 'Grande'
			})

		expect(response.statusCode).toEqual(201)
	})
})