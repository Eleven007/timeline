/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/10/20
 * 历史修订：
 */
import { combineReducers } from 'redux';
import userReducer from './user';
import {todos,visibilityFilter} from './todoApp';
export default combineReducers({
    todosStore:todos,
    visibilityFilterStore:visibilityFilter,
    userStore: userReducer,
});