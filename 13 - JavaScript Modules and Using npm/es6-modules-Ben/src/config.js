// NOTE:
// Default exports can be renamed upon import.
// Each module can only have one default export.
// Named exports must be imported by the same name which they are exported.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

// Named Export
export const apiKey = 'abc123';

export const url = 'http://wesbos.com';

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

export { age as old, dog };
