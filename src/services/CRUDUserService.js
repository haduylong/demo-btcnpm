
import db from '../models/index'
import bcrypt from 'bcryptjs';
import { json } from 'express';
import { where } from 'sequelize';
const salt = bcrypt.genSaltSync(10);

let checkUserEmail = async (user) => {
    return new Promise(async(resolve, reject)=>{
        try {
            let isFound = await db.User.findOne({
                where:{
                    email:user.email, 
                }
            }) ? true:false;

            resolve(isFound);
        } catch (error) {
            reject(error)
        }
    })
}

let handleHashPassWord = async (passWord) => {
    return new Promise( async (resolve, reject) => {
        try {
            let hashedPassword = await bcrypt.hashSync(passWord, salt);
            resolve(hashedPassword);
        } catch (e) {
            reject(e);
        }
    })
    // let hashedPassword = await bcrypt.hashSync(passWord, salt);
    // return hashedPassword;
}

let getUsers = async (userId) => {
    return new Promise( async(resolve, reject) => {
        try {
            let data = {};
            if(userId === 'ALL'){
                data = await db.User.findAll({
                    attributes :{
                        exclude:['passWord']
                    }
                });
            }else if(userId){
                data = await db.User.findOne({
                    where: {id: userId},
                    attributes :{
                        exclude:['passWord']
                    }
                })
            }
   
            resolve(data); // return data
        } catch (e) {
            reject(e);
        }
    });
} 

let postUser = (user) => {
    return new Promise(async (resolve, reject)=>{
        try {
            // check email exist
            if(checkUserEmail(user.email)){
                resolve(`email is already in use`);
            }

            let hashedPassword = await handleHashPassWord(user.passWord);
            await db.User.create({
                name: user.name,
                role: user.role,
                email: user.email,
                passWord: hashedPassword, 
                phoneNumber: user.phoneNumber,
                address: user.address,
                image: user.image,
                scores: user.scores
            })
            resolve ('created a new user');
        } catch (error) {
            reject(error);
        }
    })
}

let updateUser =async (userUd) => {
    return new Promise(async (resolve,reject)=>{
        try {
            if(!userUd.id){
                resolve(`missing parameter`);
            }
            // check user exist
            let user = await db.User.findOne({where: {id: userUd.id},
                raw: false
            });

            if (!user) {
                resolve(`User doesn't exist`);
            }
            
            user.name = userUd.name;
            user.address = userUd.address;
            await user.save();
            resolve('update is succeed')
        } catch (error) {
            reject(error);
        }
    });
}
module.exports = {
    getUsers,
    postUser,
    updateUser
}