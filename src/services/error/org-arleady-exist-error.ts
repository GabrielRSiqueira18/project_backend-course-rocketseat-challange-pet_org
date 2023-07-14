export class OrgArleayExistError extends Error {
	constructor() {
		super('Invalid credentials')
	}
}