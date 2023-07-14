import fastify from 'fastify'
import { orgsRoutes } from './http/controllers/orgs/routes'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { petsRoutes } from './http/controllers/pets/routes'

export const app = fastify()

app.register(fastifyJwt, {
	secret: env.JWT_SECRET
})

app.register(orgsRoutes)
app.register(petsRoutes)