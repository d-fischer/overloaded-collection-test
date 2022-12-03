import { DatabaseCollection } from './DatabaseCollection';
import { MemoryCollection } from './MemoryCollection';
import { QueryParam } from './QueryParam';

withOperatorsFrom(QueryParam);

const data = [
	{
		name: 'dave',
		age: 25
	},
	{
		name: 'anna',
		age: 22
	}
];

console.log(new MemoryCollection(data).find(user => user.name == 'dave'));
console.log(new DatabaseCollection('foo').find(user => user.name == 'dave'));
