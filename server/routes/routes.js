/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/9/20
 * 历史修订：
 */
let fs = require('fs');
module.exports = function (app) {
    let FS_PATH_SERVICES = './controllers';
    let REQUIRE_PATH_SERVICE = '../controllers/';
    fs.readdir(FS_PATH_SERVICES, function (err, list) {
        if (err) {
            throw '没有找到该文件夹，请检查......'
        }
        for (let e; list.length && (e = list.shift());) {
            let service = require(REQUIRE_PATH_SERVICE + e);
            service.init && service.init(app);
        }
    })
};