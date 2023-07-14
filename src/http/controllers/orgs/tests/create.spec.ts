import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from 'supertest'
import { app } from "../../../../app";

beforeAll(async () => {
	await app.ready()
})

afterAll(async () => {
	await app.close()
})

describe('Create Org Controller', () => {
	it('should be create a org', async () => {
		const response = await request(app.server)
			.post('/orgs')
			.send({
				name: 'Special Org',
				responsible_name: 'Gabriel',
				addres: 'Avenida Campinas',
				cep: '12500-30',
				email: 'gabriel@gmail.com',
				password: '123456',
				whatsapp: '11910518642',
			})

		expect(response.statusCode).toEqual(201)
	})
})