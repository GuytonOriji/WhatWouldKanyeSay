import React from 'react'
import {Navbar,Nav,Button } from 'reactstrap'
import {connect} from 'react-redux'
import {fetchOrNah} from '../actions/'

const navbar = {
		borderBottom:"solid #000",
		display:"flex",
		alignItems:"center",
		backgroundColor: '#553d67'
}


const nav = {
		flex:"1",
		display:"flex",
		justifyContent:"space-between",
		alignItems:"center",
		fontSize:"1.5rem",
		fontWeight:"bolder"
}

const btn = {
	backgroundColor: '#f64c72',
	fontWeight:"bolder"
}



	const Header =(props)=>{
			console.log('header props',props.kanyeMadOrNah)



			const callKanye = e =>{
				e.preventDefault()
					props.fetchOrNah()
			}

		return(
			<Navbar style={navbar}>
	
				<div style={nav}  className="navbar" >
				<span className="headText">What Would Kayne Say?....</span>
				<Nav>

				<div>
				<Button onClick={callKanye} style={btn}>See a Kanye Note</Button>
				</div>
				</Nav>
				</div>
			</Navbar>

			)

}

const mapStateToProps = state =>{
		return {
			needsToFetch:state.needsToFetch,
			kanyeMadOrNah:state.kanyeMadOrNah
		}
}


export default connect(
	mapStateToProps,
	{fetchOrNah}
	)(Header)