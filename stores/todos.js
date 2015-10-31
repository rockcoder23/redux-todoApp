import { createStore } from 'redux';
import todoApp from '../reducers/index.js';


/**
 * 关于Store:
 * 	1. store中维护了状态树和一些订阅和查询state的api。
 * 	2. 你可以在任何地方调用 store.dispatch(action)，包括组件中、XHR 回调中、甚至定时器中。
 * 	3. 
 */


// 定义初始的状态
const initState = {
	visibilityFilter: 'SHOW_ALL',
	todos: []
};

// 根据reducer来创建store
export let todoStore = createStore(todoApp, initState);