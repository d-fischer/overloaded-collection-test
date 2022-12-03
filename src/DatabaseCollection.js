import { Collection } from './Collection';

function isBinaryOperation(op) {
	return op.operator === 'eq';
}

export class DatabaseCollection extends Collection {
	constructor(tableName) {
		super();

		this.tableName = tableName;
	}

	executeQuery(query) {
		const conditions = [];
		const params = [];

		if (isBinaryOperation(query)) {
			const condition = [];
			switch (query.left.type) {
				case 'field': {
					condition.push(query.left.field.name);
					break;
				}
				case 'value': {
					condition.push('?');
					params.push(query.left.value);
					break;
				}
			}
			switch (query.operator) {
				case 'eq': {
					condition.push('=');
					break;
				}
			}
			switch (query.right.type) {
				case 'field': {
					condition.push(query.right.field.name);
					break;
				}
				case 'value': {
					condition.push('?');
					params.push(query.right.value);
					break;
				}
			}
			conditions.push(condition.join(' '));
		}

		return {
			query: `SELECT * FROM ${this.tableName} WHERE ${conditions.join(' ')};`,
			params
		}
	}
}
