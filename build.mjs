import {existsSync,readFileSync} from 'node:fs';
for(const file of ['index.html','style.css','app.mjs','calculators.mjs']){if(!existsSync('dist/'+file)||!readFileSync('dist/'+file,'utf8').trim())throw Error('Missing output: '+file)}
console.log('Production static build verified. No dependencies required.');
