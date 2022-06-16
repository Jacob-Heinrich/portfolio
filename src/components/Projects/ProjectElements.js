import styled from 'styled-components';
import background from '../../images/background.jpg';



export const ProjectsContainer = styled.div`
  background: ${({lightBg})=>(lightBg ? '#f9f9f9' : '#010606')};
  background-image:url(${background});
  height:860px;

  @media screen and (max-width:768px){
    padding: 100px 0;
  }
`

export const ProjectsWrapper = styled.div`
  display:grid;
  position:relative;
  grid-template-column: 10px 10px 10px;
  grid-template-row: 5em;
  gap: 0 10px;
  // z-index:1;
  height:400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  top:8em;
  padding: 0 24px;
  justify-content: center;
`

export const Column1 = styled.div`
  z-index:2;
  position:relative;
  background-color:black;
  margin-bottom:15px;
  padding: 0 15px;
  grid-column: 1;
  border:4px solid;
  border-radius: 2em;


  transition: transform 500ms ease;

  &:hover{
    transform: scale(1.05);
    &::after{
      transform: scaleX(1);
    }
  }

  &::after{
    content: "";
    position:absolute;
    height:3px;
    left:0;
    top:50px;
    background-color:#01bf71;
    width: 70%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }

`

export const Column2 = styled.div`
z-index:999;
position:relative;
background-color:black;
margin-bottom:15px;
padding: 0 15px;
grid-column: 2;
border:4px solid;
border-radius: 2em;


transition: transform 500ms ease;

&:hover{
  transform: scale(1.05);
  &::after{
    transform: scaleX(1);
  }
}

&::after{
  content: "";
  position:absolute;
  height:3px;
  left:0px;
  top:50px;
  background-color:#01bf71;
  width: 91%;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms ease;
}
`

export const Column3 = styled.div`
z-index:999;
position:relative;
background-color:black;
margin-bottom:15px;
padding: 0 15px;
grid-column: 3;
border:4px solid;
border-radius: 2em;


transition: transform 500ms ease;

&:hover{
  transform: scale(1.05);
  &::after{
    transform: scaleX(1);
  }
}

&::after{
  content: "";
  position:absolute;
  height:3px;
  width: 95%;
  left:0px;
  top:50px;
  background-color:#01bf71;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms ease;
}
`

export const Column4 = styled.div`
z-index:999;
position:relative;
background-color:black;
margin-bottom:15px;
padding: 0 15px;
grid-column: 4;
border:4px solid;
border-radius: 2em;


transition: transform 500ms ease;

&:hover{
  transform: scale(1.05);
  opacity:100%;
  &::after{
    transform: scaleX(1);
  }
}

&::after{
  content: "";
  position:absolute;
  height:3px;
  width: 95%;
  left:0px;
  top:50px;
  background-color:#01bf71;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms ease;
}
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  &:hover{
    transform: translateY(0);
  }
`

export const TopLine = styled.h1`
  position:relative;
  color: #01bf71;
  left:20em;
  top:2em;
  text-decoration:underline;

  @media screen and (max-width:768px){
    left:1em;
    top:-2em;
  }
`

export const Heading = styled.h1`
  color:white;
  margin-bottom: 24px;
  position:relative;
  top:1em;
  font-size: 25px;
  line-height: 1.1;
  font-weight:600;
  width: max-content;

  @media screen and (max-width:480px){
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 420px;
  margin-bottom: 35px;
  font-size: 25px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const Btn1 = styled.button`
  cursor: pointer;
  position:absolute;
  bottom:1em;
  left:1em;
  display:inline-block;
  text-decoration:none;
  background-color: #01bf71;
  padding: 0.5em 1.25em;
  border-radius: 5em;

  &:hover,
  &:focus{
    background-color:white;
  }
`

export const BtnTwo = styled.button`
  cursor: pointer;
  position:absolute;
  bottom:1em;
  right:1em;
  display:inline-block;
  text-decoration:none;
  background-color: #01bf71;
  padding: 0.5em 1.25em;
  border-radius:5em;

  &:hover,
  &:focus{
    background-color:white;
  }
`