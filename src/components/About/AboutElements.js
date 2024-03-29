import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: ${({lightBg})=>(lightBg ? '#E5E5E5' : '#010606')};

  @media screen and (max-width:768px){
    padding: 100px 0;
    margin-top:-8em;
    background:black;
  }
`

export const AboutWrapper = styled.div`
  display:grid;
  z-index:1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const AboutRow = styled.div`
  display:grid;
  grid-auto-column: minmax(auto,1fr);
  align-items:center;
  grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
  margin-bottom:15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom:15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  position:relative;
  bottom:2em;
  text-align:center;
  color: #444444;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  text-decoration: underline;

  @media screen and (max-width:900px){
    position:relative;
    bottom:10px;
  }
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  font-family:Quicksand;
  line-height: 1.1;
  font-weight:600;
  color: ${({ lightText })=> (lightText ? '#DA0037' : '010606')};
  opacity:70%;

  @media screen and (max-width:480px){
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 420px;
  margin-bottom: 35px;
  font-size: 25px;
  font-family:Quicksand;
  line-height: 30px;
  color: ${({darkText}) => (darkText ? '#444444' : '#fff')};

  @media screen and (max-width:768px){
    color:white;
  }
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  height:30em;
  padding-right: 0;
  border: 2px solid;
  border-radius: 5em;

  @media screen and (max-width:900px){
    height:40em;
    display:none;
  }
`
