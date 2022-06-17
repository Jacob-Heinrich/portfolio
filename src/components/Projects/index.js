import React from 'react';
import { ProjectsContainer, ProjectsWrapper, TopLine,Column1,Column2, Column3, Column4, TextWrapper, Heading, Subtitle, Btn1, BtnTwo, BtnThree} from './ProjectElements';
import { Link } from 'react-router-dom';
import workout from '../../images/workout.png';

function Projects(){
  return(
    <>
    <ProjectsContainer id = "projects">
    <TopLine>Projects</TopLine>
      <ProjectsWrapper>
          <Column1>
            <TextWrapper>
              <Heading>NASA APOD</Heading>
              <Subtitle>
              React application using NASA's astronomy picture of the day API.
              A user can enter a date to see the astronomy picture of the day for
              that day.
              </Subtitle>
            </TextWrapper>
            <Btn1><a href = "https://nasa-apod-alpha.vercel.app" target="_blank" rel="noopener noreferrer">ProjectLink</a></Btn1>
            <BtnTwo><a href = "https://github.com/Jacob-Heinrich/nasaAPOD/" target="_blank" rel="noopener noreferrer">Code</a></BtnTwo>
          </Column1>
          <Column2>
          <TextWrapper>
            <Heading>Exercise Tracker</Heading>
            <Subtitle>
            MERN application that tracks exercises
            entered by the user.
            </Subtitle>
          </TextWrapper>
          <Btn1><a href = "https://hilarious-taffy-ea5582.netlify.app/" target="_blank" rel="noopener noreferrer">Project Link</a></Btn1>
          <BtnTwo><a href = "https://github.com/Jacob-Heinrich/MERNexerciseclient" target="_blank" rel="noopener noreferrer">React Code</a></BtnTwo>
          <BtnThree><a href = "https://github.com/Jacob-Heinrich/MERNexercise" target="_blank" rel="noopener noreferrer">Rest API Code</a></BtnThree>
          </Column2>
          <Column3>
          <TextWrapper>
            <Heading>Assembly Language Sort</Heading>
            <Subtitle>This is the subtitle</Subtitle>
          </TextWrapper>
          <BtnTwo><a href="https://github.com/Jacob-Heinrich/assemblyArraySort" target="_blank" rel="noopener noreferrer">Code</a></BtnTwo>
          </Column3>
      </ProjectsWrapper>
    </ProjectsContainer>
    </>
  )
}

export default Projects;
