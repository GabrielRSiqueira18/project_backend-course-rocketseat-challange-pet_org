import { z } from 'zod'

const envSchema = z.object({
	NODE_ENV: z.enum(['production', 'test', 'dev']).default('dev'),
	JWT_SECRET: z.string(),
	PORT: z.coerce.number().default(2000),
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false) {
	console.error('Invalid Environment Variables', _env.error.format())

	throw new Error('Invalid Environment Variables')
}

export const env = _env.data