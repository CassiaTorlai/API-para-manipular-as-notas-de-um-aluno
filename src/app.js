const express = require('express');
const noteRoutes = require('./routes/noteRoutes');
const sequelize = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Configurações do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Notes API',
      version: '1.0.0',
      description: 'API para gerenciamento de notas',
    },
    servers: [
      {
        url: 'http://localhost:8080/api',
      },
    ],
    components: {
      schemas: {
        Note: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Nome do aluno',
              example: 'Pedro Silva'
            },
            score: {
              type: 'float',
              description: 'Nota que o aluno obteve na escola',
              example: '5.3'
            }
          },
          required: ['name', 'score']
        }
      }
    }
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Middleware para vdocumentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use('/api', noteRoutes);

const initDb = async () => {
  try {
    await sequelize.sync();
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
};

initDb();

module.exports = app;
