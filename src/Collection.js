import { QueryParam } from './QueryParam';

export class Collection {
	constructor() {
		if (new.target === Collection) {
			throw new TypeError('Can not instantiate abstract class Collection');
		}
	}

	find(callback) {
		const queryRepr = new Proxy({}, {
			get(target, p) {
				return new QueryParam(p);
			}
		})

		return this.executeQuery(callback(queryRepr));
	}

	executeQuery(query) {
		throw new TypeError('Not implemented: executeQuery');
	}
}
