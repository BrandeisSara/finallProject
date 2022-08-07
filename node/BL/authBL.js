const UserModel = require('../models/userModel');


const getSeamUser = (user) => {
    return new Promise((res, rej) => {
        UserModel.find({"userName":user.userName,"password":user.password}, (err, data) => {
            console.log(data)
            if (err) {
                rej(err)
            }
            else if(data.length === 0){
                res("no such a user")
            }
            else{
                res(data)
            }
        })
    })
}
module.exports = {getSeamUser}