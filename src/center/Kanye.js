import React, {useState,useEffect} from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {connect} from 'react-redux'

const immg = {
  flex:"1",
  height:"100%",
  width:"100%",
}

const slowmo = {
backgroundColor: '#245282',
boxShadow:'0 0 10px #000'
}

const Kayne = (props) => {
console.log('im kanye',props)
  

  return (
      <Card style={slowmo}>
        <CardBody>
          <CardTitle>Wassup Man</CardTitle>
          <CardSubtitle>Im Kanye West</CardSubtitle>
        </CardBody>
        <img width="100%" src={!props.kanyeMadOrNah?props.pic[0]:props.pic[1]} alt="Card image cap" style={immg}/>
        <CardBody>
          {!props.kanyeMadOrNah?(<CardText>An people always wanna say I'm crazy, so Ima shut up an write my s#!+% down and
                    if someone wants to know.....they'll read it. &#128397;</CardText>):
          (<CardText>YOU KNOW WHAT!?!?!?</CardText>)}
        </CardBody>
      </Card>
  );
};


const mapStateToProps = state =>{
      return {
        kanyeMadOrNah:state.kanyeMadOrNah,

      }
}

export default connect(
    mapStateToProps,
    {}

  )(Kayne);
