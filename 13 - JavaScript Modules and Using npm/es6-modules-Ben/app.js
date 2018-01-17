// NOTE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// import { uniq } from 'lodash';
// import insane from 'insane';
// import jsonp from 'jsonp';
import {
  apiKey as key,
  url,
  sayHi,
  old,
  dog,
} from './src/config';
// NOTE: Combo of default and named imports.
import User, { createURL, gravatar } from './src/user';

const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);

console.log(sayHi(wes.name));
console.log(image);
console.log(url, key);
console.log(profile);
