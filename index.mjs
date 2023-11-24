import { CompressText, ConvertByteHashToText, ConvertToByteHash } from './compress/index.mjs';

let myHash = ConvertToByteHash("Hello guys, my name is Elisson Vale, and i am developer for 3 yers, lets study a lot?");

console.log(`hash: ${myHash}`);

// let mytext = ConvertByteHashToText(myHash);

// console.log(`text hash umpress: ${mytext}`);

CompressText(myHash);

