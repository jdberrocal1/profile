import React from 'react';
import './skills.scss';

import Grid from '@material-ui/core/Grid';

const skills = [
  {
    name: 'Git',
    class: 'git',
    skill: 'Advance'
  },
  {
    name: 'Javascript',
    class: 'js',
    skill: 'Advance'
  },
  {
    name: 'HTML',
    class: 'html',
    skill: 'Advance'
  },
  {
    name: 'CSS',
    class: 'css',
    skill: 'Intermediate'
  },
  {
    name: 'SASS',
    class: 'sass',
    skill: 'Intermediate'
  },
  {
    name: 'EmberJS',
    class: 'ember',
    skill: 'Intermediate'
  },
  {
    name: 'React',
    class: 'react',
    skill: 'Basic'
  },
  {
    name: 'Vue',
    class: 'vue',
    skill: 'Basic'
  },
  {
    name: 'C#',
    class: 'csharp',
    skill: 'Basic'
  },
  {
    name: 'NodeJS',
    class: 'node',
    skill: 'Basic'
  },
  {
    name: 'Ruby on Rails',
    class: 'rails',
    skill: 'Basic'
  },
  {
    name: 'Python',
    class: 'python',
    skill: 'Basic'
  },
];

function skillList() {
  return skills.map(skill => {
    return <div className={`skill_logo skill_logo--${skill.class}`} key={skill.class}></div>
  });
}

function Skills() {
  return (
    <div className="skills" >
      <Grid container spacing={5} justify="center" >
        <Grid item xs={12} sm={3}>
            <h2 className="title-left"><span>Skills</span></h2>
        </Grid>
        <Grid item xs={11} sm={8}>
            <p className="subtitle">Since 2015, I have been working in different kind of projects with different kind of customers and technologies.
              Most of the experience have been in web development, working in the Frontend side and the Backend side as well.</p>
            <p className="subtitle">I'm currently working with <b>HTML, Javascript, CSS, EmberJS, Sass, Ruby on Rails, RSpec, Git, A/B Testing</b>
              on a daily basis, and I also have some side-projects with <b>React, Python, Vue, etc.</b></p>
            <p className="subtitle">I also have some experience working with <b>C# and .NET technologies, NodeJS, AngularJS, Salesforce, Ionic.</b></p>
            <div className="skill-list">{skillList()}</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Skills;
