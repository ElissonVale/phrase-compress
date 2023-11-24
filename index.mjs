import {Decimal} from 'decimal.js'
import { CompressText, ConvertByteHashToText, ConvertToByteHash } from './compress/index.mjs';

Decimal.set({ precision: 9999999 });

let myHash = ConvertToByteHash("Hello World");

console.log(`hash: ${myHash}`);

let mytext = ConvertByteHashToText(myHash);

console.log(`text hash umpress: ${mytext}`);

CompressText(myHash);

