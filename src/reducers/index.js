import {FETCHED,FETCHING,ERR} from '../actions/'


const initialState={
	quote:"",
	needsToFetch:false,
	error:"",
	kanyeMadOrNah:false
}



const reducer = (state = initialState, action) =>{

			switch(action.type){
				case FETCHING:
					return {
						...state,
						needsToFetch:true,
						kanyeMadOrNah:false,
					}

				case FETCHED:
				return {
					...state,
					quote:action.payload,
					needsToFetch:false,
					kanyeMadOrNah:true,
				}

				case ERR:
				return {
					...state,
					error:action.payload,
					needsToFetch:false,
					kanyeMadOrNah:false
				}

				default:
				return state
			}
}





export default reducer