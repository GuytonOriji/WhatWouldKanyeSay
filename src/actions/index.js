import axios from 'axios'
export const FETCHING = 'FETCHING'
export const FETCHED = 'FETCHED'
export const ERR = 'ERR'	







export const fetchOrNah = () => dispatch =>{
		dispatch({type:FETCHING})


		axios.get("https://api.kanye.rest/").then(kayne=>{
				console.log(kayne)
				setTimeout(()=>{dispatch({type:FETCHED, payload:kayne.data.quote})},700)
		}).catch(err=>{
			console.log(err)
			dispatch({type:ERR,payload:err})
		})
}