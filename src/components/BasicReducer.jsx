import React, {useReducer} from 'react'

const initialState = 0
const reducer = (currentState, action) => {
	switch(action) {
		case 'add_1':
			return currentState + 1
		case 'multiple_3':const [count, dispatch] = useReducer(reducer, initialState)
			return currentState * 3
		case 'reset':
			return initialState
		default:
			return currentState
	}
} 

function BasicReducer(props) {
	
	return (
		<div>
			<div>Count {count}</div>
			<button onClick={()=>dispatch('add_1')}>add_1</button>
			<button onClick={()=>dispatch('multiple_3')}>multiple_3</button>
			<button onClick={()=>dispatch('reset')}>Reset</button>
		</div>
	)
}

export default BasicReducer

