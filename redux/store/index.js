/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/10/20
 * 历史修订：
 */
import { createStore } from 'redux'
import reducers from '../reducers'
let store = createStore(reducers);
module.exports=store;