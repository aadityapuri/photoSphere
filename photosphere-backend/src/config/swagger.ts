import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Instagram Clone API',
      version: '1.0.0',
      description: 'API docs for Instagram clone backend',
    },
    servers: [
      {
        url: `http://localhost:5000`, // Change if using different port
      },
    ],
  },
  apis: [path.resolve('src/routes/*.ts')], // Adjust this path to where your routes are
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;