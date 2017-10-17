/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/10/17
 * 历史修订：
 */
module.exports=function (sequelize, DataTypes) {
    return sequelize.define('Notes',{
        id: { type: DataTypes.BIGINT(11), autoIncrement: true, primaryKey: true, unique: true, comment:'角色Id' },
        uid:{ type: DataTypes.BIGINT(11)},
        title: {
            type: DataTypes.STRING,
        },
        desc: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
        notification: {
            type: DataTypes.STRING,
        },
        repeat: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
        },
        beginTime: {
            type: DataTypes.STRING,
        },
        endTime: {
            type: DataTypes.STRING,
        },
        timestatus: {
            type: DataTypes.INTEGER,
        }
    });
};