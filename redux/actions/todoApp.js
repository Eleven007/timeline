/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/10/20
 * 历史修订：
 */
/*
 * action 类型
 */

import * as TYPES from './types';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export function addTodo(text) {
    return { type: TYPES.ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TYPES.TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: TYPES.SET_VISIBILITY_FILTER, filter }
}