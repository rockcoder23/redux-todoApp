import { combineReducers } from 'redux';
import { todos } from './todos.js';
import { visibilityFilter } from './visibility.js';

/*
 * 关于Reducer:
 * 	1. Action只表明了要执行的动作，并没有指明要怎么执行动作，reducer就是整整实现动作的一个个函数，接收 old state & action 返回最新的state, 注意是一个新的state对象；
 * 	
 * 	2. 设计State, 应用中的所有state都被保存在一个单一的对象中，称为state树，建议思考清楚如何以一个最简洁的形式把应用中的state用对象树描述出来。
 * 		以todoApp为例，state树可以设计如下:
  		{
			  visibilityFilter: 'SHOW_ALL',           //用来表明显示什么状态的任务的state
			  todos: [{                               //用来表明todo tasks的state
			    text: 'Consider using Redux',         //task 描述
			    completed: true,                      //task的状态
			  }, {
			    text: 'Keep all state in a single tree',
			    completed: false
			  }]
		}

 * 	3. 保持reducer中纯净非常重要，尽量不要再reducer中执行： 修改传入的参数，执行有副作用的操作，如API请求和路由跳转.即reducer是幂等操作，传入的参数一样，返回的state一定一样。
 * 	
 * 	4. 根据不同的业务将不同的reducer拆分到各个文件中，再使用redux提供的combineReducer连接起来，返回整个应用的完整State对应的reducer.
 */
 

 /**
  * [todoApp 使用combineReducer连接起来，返回整个应用的完整State所对应的Reducer。]
  * 
  * @type {[type]}
  */
 const todoApp = combineReducers({
 	visibilityFilter,
 	todos
 });
 export default todoApp;


 // 等同于:
 
 /**

 const initState = {
 	visibilityFilter: 'SHOW_ALL',
 	todos: []
 };

function todoApp(state = initState, action) {
 	return {
 		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
 		todos: todos(state.todos, action)
 	}
 }

export default todoApp;


**/