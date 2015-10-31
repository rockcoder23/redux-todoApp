import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../constants/actionTypes.js';


/**
 * 关于Action:
 * 
 * 1. action 只是描述要做一个什么动作，所以可以把action写的更一目了然一些。并没有指明该如何做，真正实现该动作的是reducer.
 * 
 * 2. action 本质是 JavaScript 普通对象，有别于其他的flux库，action里面其实执行了dispatch的动作。
 * 	  相反，redux使用store.dispatch(addTodo(text))将action保持最纯洁，便于移植；
 * 
 *  3. 区分action & action creater function
 */


/**
 * 定义Todo app中需要的actions
 * addTodo, completeTodo, setVisibilityFilter; 
 */


/**
 * addTodo 点击创建的action创建函数
 * @param {String} text 要创建的任务文本
 */
export function addTodo(text) {
	return {type: ADD_TODO, text};
}

/**
 * completeTodo 点击完成的action创建函数
 * @param {int} index 任务在任务列表中的索引值
 */
export function completeTodo(index) {
	return {type: COMPLETE_TODO, index};
}

/**
 * setVisibilityFilter 点击显示的action创建函数
 * @param {int} index 任务在任务列表中的索引值
 */
export function setVisibilityFilter(filter) {
	return {type: SET_VISIBILITY_FILTER, filter};
}

