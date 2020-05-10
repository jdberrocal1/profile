import React from 'react';
import './skills.scss';

import Grid from '@material-ui/core/Grid';

function Skills() {
  return (
    <div className="skills" >
      <Grid container spacing={40} justify="center" >
        <Grid item xs={12} sm={3}>
            <h2 className="title-left"><span>Skills</span></h2>
        </Grid>
        <Grid item xs={11} sm={8}>
            <p className="subtitle">For more than 3 years, I have been working in different kind of projects with different kind of customers and technologies. Most of the experience have been in web development, working in the Frontend side and the Backend side as well.</p>
            <p className="subtitle">As part of my knowledge this are my technical skills</p>


        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
