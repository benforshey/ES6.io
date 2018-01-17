import slug from 'slug';
import md5 from 'md5';
import { url } from './config';

export default function User(name, email, website) {
  return { name, email, website };
}

export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}

export function gravatar(email) {
  const hash = md5(email.toLowerCase());
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}
