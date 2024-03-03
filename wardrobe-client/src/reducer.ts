// reducers.ts
import { combineReducers } from 'redux';
import { ActionType, createAction, createReducer } from 'typesafe-actions';

// Define types for your state
type CounterState = {
	count: number;
};

// Define actions
export const increment = createAction('INCREMENT')();
export const decrement = createAction('DECREMENT')();

// Define reducers
const initialState: CounterState = { count: 0 };
export const counterReducer = createReducer<CounterState, ActionType<typeof increment | typeof decrement>>(initialState)
	.handleAction(increment, state => ({ count: state.count + 1 }))
	.handleAction(decrement, state => ({ count: state.count - 1 }));

// Combine reducers
const rootReducer = combineReducers({
	counter: counterReducer,
});

export default rootReducer;
