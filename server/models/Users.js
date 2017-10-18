/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/8/4
 * 历史修订：
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Users', {
        id: { type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment:'主键' },
        name: {
            type: DataTypes.STRING,
            allowNull: false,            //是否允许为空
        },
        nickName: {
            type: DataTypes.STRING,
        },
        avator: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        birthday: {
            type: DataTypes.DATE,
        },
        phone: {
            type: DataTypes.STRING,
        },
        location:{
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER,
        },
        deviceId: {
            type: DataTypes.STRING,
        },
        ip: {
            type: DataTypes.STRING,
        },
        token: {
            type: DataTypes.STRING,
        }
    })
};