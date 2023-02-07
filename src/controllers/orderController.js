import orderService from '../services/orderService'

let getAllOrderController = async (req, res) => {
    let allOrder = await orderService.getAllOrderService();
    return res.status(200).json({
        allOrder
    })
}

module.exports = {
    getAllOrderController
}