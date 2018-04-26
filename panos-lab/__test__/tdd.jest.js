'use strict';

const fileReader=require('../lib/reader');
const fs=require('fs');

console.log(__dirname,'DIRNAME');

const files=[
    `${__dirname}/src/../../data/1.txt`,
    `${__dirname}/src/../../data/2.txt`,
    `${__dirname}/src/../../data/3.txt`,
]

const badFiles=[
    `${__dirname}/src/../../data/bad1.txt`,
    `${__dirname}/src/../../data/bad2.txt`,
    `${__dirname}/src/../../data/bad3.txt`,
]

beforeAll((done)=>{
return fs.readFile(files)=>{
    compare1.push(data1);
}
}