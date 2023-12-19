import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const CompC = () => {
	const {dispatchProvided} = useContext(AppContext)
	return (
		<div>
			<button onClick={()=> dispatchProvided('add_1')}>Add_1</button>
		</div>
	)
}

export default CompC
