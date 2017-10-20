/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2017/10/20
 * 历史修订：
 */

import {VisibilityFilters } from '../actions/todoApp';
import * as TYPES from '../actions/types';
const { SHOW_ALL } = VisibilityFilters;


export function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case TYPES.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}
export  function todos(state = [], action) {
    switch (action.type) {
        case TYPES.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TYPES.TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            });
        default:
            return state
    }
}