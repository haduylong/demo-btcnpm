
import db from "../models";
import CRUDUserServices from "../services/CRUDUserService"

let getALLUsers = async (req, res) => {
    let userId =  req.body.id;
    if(!userId){
        return res.status(200).json({
            errorCode: 1,
            message: 'Missing id paramater',
            data : []
        })
    }

    let data = await CRUDUserServices.getUsers(userId);
 
    return res.status(200).json({
        errorCode: 0,
        message: 'ok',
        data : data
    })
}

let postUserController = async (req, res) => {
    let user = req.body;
    if((user.email&&user.passWord)||user.phonNumber){
        let newUser = await CRUDUserServices.postUser(user);
        return res.status(200).json({
            errorCode: 0,
            newUser
        })
    }else{
        return res.status(200).json({
            errorCode: 1,
            message: 'check input missing',
        })
    }

}

let updateUserController = async (req, res) => {
    let user = req.body;
    let updateUser = await CRUDUserServices.updateUser(user);
    return res.status(200).json({
        message: 'update from controller',
        updateUser
    })
}


module.exports = {
    getALLUsers,
    postUserController,
    updateUserController
}