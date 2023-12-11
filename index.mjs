import { CompressText, ConvertByteHashToText, ConvertToByteHash } from './compress/index.mjs';
import { getPeriodicMap } from './math/index.mjs';

let myHash = ConvertToByteHash("Hello guys, my name is Elisson Vale, and i am developer for 3 yers, lets study a lot? ");

console.log(`hash: ${myHash}`);

getPeriodicMap(`0.${myHash}`);

// let mytext = ConvertByteHashToText(myHash);

// console.log(`text hash umpress: ${mytext}`);

// CompressText(myHash);

