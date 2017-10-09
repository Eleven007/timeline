/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/8/4
 * 历史修订：
 */
const Sequelize = require('sequelize');
module.exports = {
    userId: {
        type: Sequelize.STRING,      //字段类型string
        allowNull: false,            //是否允许为空
        unique: true                 //是否唯一
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,            //是否允许为空
        unique: true                 //是否唯一
    },
    nickName: {
        type: Sequelize.STRING,
    },
    avatar: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    birthday: {
        type: Sequelize.DATE,
    },
    phone: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.INTEGER,
    },
    deviceId: {
        type: Sequelize.STRING,
    },
    ip: {
        type: Sequelize.STRING,
    },
    token: {
        type: Sequelize.STRING,
    }
};