import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../firebase'



export default function Header() {
  const [user]=useAuthState(auth)
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        onClick={()=>auth.signOut()}
        alt={user?.displayName}
        src={user?.photoURL}
        >
          
          </HeaderAvatar>
          <AccessTimeIcon/>
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='search slack'/>
      </HeaderSearch
      >
      <HeaderRight>
        <HelpOutlineIcon/>
        </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  flex: 0.3;
  
  align-items: center;
  
  background-color:var(--slack-color);
  color:white;
`;

const HeaderLeft = styled.div`
margin-left: 20px;
display:flex;
align-items:center;
  flex: 0.3;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
cursor:pointer;
 :hover{
opacity:0.8;
} 
`;

const HeaderSearch=styled.div`
flex:0.4;
opacity:1;
border-radius:6px;
text-align:center;
background-color:#421f44;
display:flex;
padding: 0 50px;
color: gray;
border: 1px solid gray;

> input{
  background:transparent;
  border:none;
  text-align:center;
  min-width:30vw;
  outline:0;
  color:white;
}

`;

const HeaderRight= styled.div`
display:flex;
flex:0.3;
justify-content:flex-end;


> .MuiSvgIcon-root{
  margin-left:auto;
  margin-right:100px; 
  
}


`;