import React from "react";
import Thumbnail from './Thumbnail.js';
import Image from './images/placeholder.png';
import JetPackJoustImage from './images/JetPackJoust.png';
import HogwartsImage from './images/hogwarts.jpg';
import RHITMap from './images/RHITMap.PNG'
import ProjectCard from './ProjectCard.js';
import Grid from '@material-ui/core/Grid';
 
function Projects(props) {
  return (
    <div>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}>
        {projectData.map((project, index) => {
          return (
          <Grid item>
            <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                githubURL={project.githubURL}
            />
           </Grid>
           )
        })}
        </Grid>

    </div>
  )
}
 
export default Projects;

var projectData = [
    {
        title: "Jetpack Joust",
        description: "Fly, swoop, and slide your way to victory in this 2D Java game inspired by Jetpack Joyride and Joust(1982).",
        githubURL: "https://github.com/Slakstins/JetPackJoust",
        image: JetPackJoustImage
    },
    {
        title: "Sort my Professor",
        description: "Sort your professors into Hogwarts houses by filling out surveys and submitting them to a database.",
        githubURL: "https://github.com/Slakstins/SortMyProf",
        image: HogwartsImage
    },
    {
        title: "RHIT Class Map",
        description: "Determine the optimal route through campus based on your class schedule and other optional factors.",
        githubURL: "https://github.com/Slakstins/RHITMap",
        image:RHITMap
    }
]