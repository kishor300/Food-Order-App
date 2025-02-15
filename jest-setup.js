// 1️⃣ Solution For Errors with TextEncoder is not defined-

const { TextEncoder, TextDecoder } = require('util');   // CJS
// import { TextDecoder, TextDecoder } from 'util';     // ES6

// 👇 Polyfill for TextEncoder-Decoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// ----------------------------------------------------

// 2️⃣ Solution For Errors with image,css file-
module.exports = {                                      //CJS
    myStub: 'Mock_Stub'
};
// export const myStub = 'Mock_Stub';                   // ES6

// 👆 best practice to replace file imports with 'mocks', like returning a 'static string' for images,CSS etc.
// ----------------------------------------------------

/*
module.exports = {
myStub: 'Mock_Stub',
};
OR
export const myStub = 'Mock_Stub';
*/