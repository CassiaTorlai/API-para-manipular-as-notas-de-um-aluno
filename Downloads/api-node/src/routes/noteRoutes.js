const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Retorna todas as notas
 *     responses:
 *       200:
 *         description: Lista de notas
 *       500:
 *         description: Erro ao recuperar as notas
 */
router.get('/notes', noteController.getAllNotes);

/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     summary: Retorna uma nota pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Nota encontrada
 *       404:
 *         description: Nota não encontrada
 *       500:
 *         description: Erro ao recuperar a nota
 */
router.get('/notes/:id', noteController.getNoteById);

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Cria uma nova nota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       201:
 *         description: Nota criada com sucesso
 *       500:
 *         description: Erro ao criar a nota
 */
router.post('/notes', noteController.createNote);

/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Atualiza uma nota pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: Nota atualizada com sucesso
 *       404:
 *         description: Nota não encontrada
 *       500:
 *         description: Erro ao atualizar a nota
 */
router.put('/notes/:id', noteController.updateNote);

/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Deleta uma nota pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Nota deletada com sucesso
 *       404:
 *         description: Nota não encontrada
 *       500:
 *         description: Erro ao deletar a nota
 */
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;
