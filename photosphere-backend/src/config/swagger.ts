import fs from 'fs';
import path from 'path';

const swaggerPath = path.resolve('src/config/docs/swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf-8'));

export default swaggerDocument;
