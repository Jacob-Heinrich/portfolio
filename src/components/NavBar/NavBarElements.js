import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1rem;
  position:sticky;
  top: 0;
  z-index:10;

  @media screen and (max-width: 960px){
    transition:0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)`
  color: #ffff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display:flex;
  align-items:center;
  margin-left:24px;
  font-weight: bold;
  text-decoration:none;
`

export const MobileIcon = styled.div`
  display: none;
  display:block;
  position:absolute;
  top: 0;
  right: 0;
  transform:translate(-100%, 60%);
  font-size: 1.8rem;
  cursor:pointer;
  color: #ffff;
  z-index: 999999;

  @media screen and (max-width:768px){
    display:block;
    position:absolute;
    top: 0;
    right: 0;
    transform:translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color: #ffff;
    z-index: 999999;
  }
`

export const NavMenu = styled.ul`
  display:flex;
  align-items:center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px){
    display:none;
  }
`

export const NavItem = styled.li`
  height:80px;
`


export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    color: #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display:flex;
  align-items:center;

  @media screen and (max-width: 768px){
    display:none;
  }
`

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #DA0037;
  white-space:nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline:none;
  border:none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  text-decoration:none;

  &:hover{
    transition: all .2s ease-in-out;
    background: #E3A3B3;
    color: black;
  }
`
