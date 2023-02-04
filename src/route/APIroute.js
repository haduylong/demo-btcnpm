import express, { Router } from 'express'
import APIController from '../controllers/APIController'

const route = express.Router();
let initAPIRoute = (app) => {
    route.get('/api/crud-get-user', APIController.getALLUsers);
    route.post('/api/crud-post-user', APIController.postUserController);
    route.put('/api/crud-update-user', APIController.updateUserController)
    return app.use('/', route);
}

module.exports = {
    initAPIRoute
}