import React from 'react';
import { Alert } from 'reactstrap';
import {connect} from 'react-redux'





const notes ={

}


const Quotes = props => {

  console.log('quotes comp',props)
  return (
    <div style={notes}>
 
        <Alert color={props.kanyeMadOrNah?"danger":"info"}>
        <h4 className="alert-heading">My Notes To Self</h4>
        <address>
        <hr />
        {
          !props.quote?
          (
              <span>......hmmm Im thinking</span>
            )
            :
            (
             <span> &#128397; {props.quote} </span>
              )
          
        }
        <hr />
        </address>
        <hr />
        <p className="mb-0">
         <sup>PS-</sup>
        <small>do not leave your notes here...kim might see this so erase the last one and write a new one...</small>
         <sub>-Genius</sub>
        </p>
      </Alert>
    </div>
  );
};


const mapStateToProps = state =>{
  return {
    quote:state.quote,
    error:state.error,
    kanyeMadOrNah:state.kanyeMadOrNah
  }
}

export default connect(
mapStateToProps,
{}
  )(Quotes);

