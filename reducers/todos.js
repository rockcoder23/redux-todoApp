import { ADD_TODO, COMPLETE_TODO } from '../constants/actionTypes.js';

/**
 * [todos 更新tasks列表的reducer, 负责整个state中 todos部分]
 * @param  {Array}  state  [description]
 * @param  {[type]} action [description]
 * @return {[type]}        [description]
 */
export function todos (state = [], action) {
	switch (action.type) {

		case ADD_TODO: 
			return [...state, {
				text: action.text,
				completed: false
			}];

		case COMPLETE_TODO:
			return [
				...state.slice(0, action.index), 
				Object.assign({}, state[action.index], {
					completed: true
				}),
				...state.slice(action.index + 1)
			];

		default: 
			return state;
	}
}