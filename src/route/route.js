import orderController from '../controllers/orderController'
import express from 'express'

const route = express.Router(); 

let initOrderRoute = (app) => {
    route.get('/api/get-all-order', orderController.getAllOrderController);
    return app.use('/', route);
}

module.exports = {
    initOrderRoute

}