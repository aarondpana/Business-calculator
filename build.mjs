import {existsSync,readFileSync} from 'node:fs';
for(const file of ['index.html','style.css','app.mjs','calculators.mjs','extended.css','extended.mjs','tool-logic.mjs','tool-schema.mjs']){if(!existsSync('dist/'+file)||!readFileSync('dist/'+file,'utf8').trim())throw Error('Missing output: '+file)}
for(const file of ['app.mjs','calculators.mjs','extended.mjs','tool-logic.mjs','tool-schema.mjs']){const source=readFileSync('dist/'+file,'utf8');for(const [,asset] of source.matchAll(/from ['"]\.\/([^'"]+)['"]/g))if(!existsSync('dist/'+asset))throw Error('Missing relative import: '+asset)}
console.log('Production static build verified. No dependencies required.');
