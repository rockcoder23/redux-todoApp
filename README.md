###Redux 应用中数据的生命周期遵循下面 4 个步骤:
1. 调用 store.dispatch(action).
	你可以在任何地方调用 store.dispatch(action)，包括组件中、XHR 回调中、甚至定时器中

2. Redux store 调用传入的 reducer 函数.
	Store 会把两个参数传入 reducer，当前的 state 树和 action.
	reducer 是纯函数。它应该是完全可预测的：多次传入相同的输入必须产生相同的输出.

3. 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
	根 reducer 的结构完全由你决定。Redux 原生提供combineReducers()辅助函数，
	来把根 reducer 拆分成多个函数，用于分别处理 state 树的一个分支.


4. Redux store 保存了根 reducer 返回的完整 state 树。