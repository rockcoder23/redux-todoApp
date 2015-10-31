import { SET_VISIBILITY_FILTER } from '../constants/actionTypes.js';


/**
 * [visibilityFilter 用于更改显示某种状态任务的reducer，负责整个state中 visibilityFilter部分]
 * @param  {[String]} state  	[默认状态SHOW_ALL,其他状态： SHOW_COMPLETE， SHOW_ACTIVE]
 * @param  {[Object]} action 	[要执行的动作]
 * @return {[String]} newState  [新的状态]
 */
export function visibilityFilter (state = 'SHOW_ALL', action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER: 
			return action.filter;
		default:
			return state;
	}
}
