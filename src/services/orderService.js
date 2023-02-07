import db from '../models/index'

let getAllOrderService = async() => {
    return new Promise(async (resolve, reject)=>{
        try {
            let allOrder = await db.Order.findAll({
                attributes: ['id', 'orderDate','address','status','payment'],
                include: [
                    {model: db.Account,as:'FKOrderToAccount' ,attributes: ['username', 'email','phone']},
                    {model: db.OrderItem, as:'FKOderItemToOrder', attributes: ['itemId', 'quantity']},
                    {model: db.Voucher, as:'FKOrderToVoucher', attributes: ['discount', 'limit']}
                ],
                raw: true,
                nest: true
            });
            resolve({
                errorCode: 0,
                allOrder
            })
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    getAllOrderService
}