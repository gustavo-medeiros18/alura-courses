/**
 * @author: Gustavo Medeiros
 * This code shows an example of using the crypto module
 * to generate a hash from a string.
 */
import { createHash } from 'crypto';

/**
 * Generates a hash based on sha256
 * @param message
 * @returns message hash based on sha256
 */
function generateHash(message) {
  const hashResult = createHash('sha256').update(message).digest('hex');

  return hashResult;
}

const message = 'Hello World';
const hash = generateHash(message);

console.log(hash);