import React from "react"
import ProfilePicture from "./images/profilePicture.jpg"
import { Grid, Typography} from '@material-ui/core';
import SocialAccounts from "./SocialAccounts";
 
var pictureStyle = {
   height: 415,
   width: 330,
}

var alignLeft = {
  textAlign: "left"
}
 
function About(props) {
  return (
    <div>
      <Grid justify="center" container spacing= {10}>
        <Grid item>
          <img style ={pictureStyle} src={ProfilePicture}/>
        </Grid>
        <Grid item>
          <Typography variant="h5" style={alignLeft}>Hi, I'm Seth. My interest in computer science stems from my enjoyment of <br />
          problem-solving in a group and the satisfaction I feel from completing a project.<br />
          I am searching for a summer internship with a positive, inclusive work environment<br />
          in order to learn more about software while building on my resume.<br />
          </Typography>
        </Grid>
      </Grid>
      <SocialAccounts/>
    </div>
  )
}



export default About;