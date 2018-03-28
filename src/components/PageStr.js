
import React from 'react'
import Aux from '../hoc/_Aux'
import Header from './Header'
import Footer from './Footer'

const PageStr = (props) =>(

	<Aux>
		<div>
			<Header/>
		</div>
		<div>
			{props.children}
		</div>
		<div>
			<Footer/>
		</div>
	</Aux>

	)

export default PageStr