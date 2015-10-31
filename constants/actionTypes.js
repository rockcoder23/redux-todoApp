/**
 * 定义todoApp中action的一些常量,单独存放便于维护。
 */

// 定义action的各种类型
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// 其他常量
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETE: 'SHOW_COMPLETE',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

