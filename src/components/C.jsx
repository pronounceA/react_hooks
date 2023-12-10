import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

function C() {

	const value = useContext(AppContext)
	
	return (
		<div>
			<h3>C</h3>
			{ value }
		</div>
	)
}

export default C
