import React from 'react';
import './home.scss';

import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Hi, I'm Daniel Berrocal</h1>
        <p>I'm a Costa Rica based <span>FullStack Developer.</span> Let's start scrolling and learn more <span>about me.</span></p>
        <hr/>
        <Grid container spacing={0} justify="center">
          <Grid item xs={2} sm={1}>
              <a href="https://www.facebook.com/jdberrocal1" target="_blank"><FacebookIcon fontSize="large"/></a>
          </Grid>
          <Grid item xs={2} sm={1}>
              <a href="https://www.github.com/jdberrocal1" target="_blank"><GitHubIcon fontSize="large"/></a>
          </Grid>
          <Grid item xs={2} sm={1}>
              <a href="https://www.instagram.com/jdberrocal1" target="_blank"><InstagramIcon fontSize="large"/></a>
          </Grid>
          <Grid item xs={2} sm={1}>
          <a href="https://www.linkedin.com/in/jdberrocal1/" target="_blank"><LinkedInIcon fontSize="large"/></a>
          </Grid>
          <Grid item xs={2} sm={1}>
              <a href="https://www.twitter.com/jdberrocal1" target="_blank"><TwitterIcon fontSize="large"/></a>
          </Grid>
          <Grid item xs={2} sm={1}>
              <a href="https://wa.me/50686899169?text=Hey%20Daniel%20" target="_blank"><WhatsAppIcon fontSize="large"/></a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
