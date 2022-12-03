import { Collection } from './Collection';

function isBinaryOperation(op) {
	return op.operator === 'eq';
}

function getOperandValue(item, elem) {
	switch (item.type) {
		case 'field': {
			return elem[item.field.name];
		}
		case 'value': {
			return item.value;
		}
	}
}

export class MemoryCollection extends Collection {
	constructor(data) {
		super();

		this.data = data;
	}

	executeQuery(query) {
		return this.data.find(
			elem => {
				if (isBinaryOperation(query)) {
					const leftValue = getOperandValue(query.left, elem);
					const rightValue = getOperandValue(query.right, elem);
					switch (query.operator) {
						case 'eq': {
							return leftValue === rightValue;
						}
					}
				}
			}
		)
	}
}
