/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/20
 * 历史修订：
 */
let crypto = require('crypto');
module.exports = {
    guid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString();
        }).toUpperCase();
    },
    md5: function (password) {
        let md5 = crypto.createHash('md5');
        let salt = '(!%88hs@gophs*)#sassb9';
        return md5.update(password + salt).digest('hex');
    },
    getKey: function () {
        return 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE';
    }
};
