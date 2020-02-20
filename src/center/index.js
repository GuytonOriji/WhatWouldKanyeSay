import React from 'react';
import  Kanye from './Kanye'
import  Quotes from './Quotes'
import {Container, Row} from 'reactstrap'




const sheet = {
		flex:"1",
		display:"flex",
		width:"100%",
		justifyContent:"space-between",
		alignItems:"center",
		fontSize:"1.5rem",
		fontWeight:"bolder"
}

const justPushing ={
	marginTop:"50px"
}


const Kayne = (props) => {
console.log(props)

  return (
    <Container style={justPushing}>
      <div style={sheet} className="sheet">
      	<Kanye pic={props.pic}/>
      	<Quotes />
      </div>
    </Container>
  );
};

export default Kayne;
