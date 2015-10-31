import { addTodo, completeTodo, setVisibilityFilter } from './actions/todos.js';
import { VisibilityFilters } from './constants/actionTypes.js';
import { todoStore } from './stores/todos.js';


console.log('初始态：', todoStore.getState());

let unsubscribe = todoStore.subscribe(() => 
	console.log('状态变更：',  todoStore.getState())
);

todoStore.dispatch(addTodo('learn about acitons'));
todoStore.dispatch(addTodo('learn about reducers'));
todoStore.dispatch(addTodo('learn about store'));

todoStore.dispatch(completeTodo(0));
todoStore.dispatch(completeTodo(1));

todoStore.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETE));

unsubscribe();

console.log(todoStore);