import { Operators } from '@littledan/operator-overloading-shim';

const QueryParamOperators = Operators(
	{
		'=='(a, b) {
			return {
				operator: 'eq',
				left: {
					type: 'field',
					field: a
				},
				right: {
					type: 'field',
					field: b
				}
			};
		}
	},
	{
		left: String,
		'=='(a, b) {
			return {
				operator: 'eq',
				left: {
					type: 'value',
					value: a
				},
				right: {
					type: 'field',
					field: b
				}
			}
		}
	},
	{
		right: String,
		'=='(a, b) {
			return {
				operator: 'eq',
				left: {
					type: 'field',
					field: a
				},
				right: {
					type: 'value',
					value: b
				}
			}
		}
	}
);

export class QueryParam extends QueryParamOperators {
	constructor(name) {
		super();
		this.name = name;
	}
}
