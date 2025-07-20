import fs from 'fs';

const file = './dist/routes/routes.js';
let content = fs.readFileSync(file, 'utf-8');

// Add `.js` to relative imports without extension
content = content.replace(/from\s+['"](\..*?)(?<!\.js)['"]/g, `from '$1.js'`);

fs.writeFileSync(file, content, 'utf-8');
console.log('✅ Fixed import extensions in routes.js');