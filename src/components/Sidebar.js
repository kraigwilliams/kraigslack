import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';


import SidebarOption from '../components/SidebarOption'
export default function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>SLACK</h2>
                  <h3>  <FiberManualRecordIcon/> Kraig Williams</h3>
                
                    </SidebarInfo>
                    <CreateIcon/>
                </SidebarHeader>

         <SidebarOption Icon={InsertCommentIcon} title='Threads' />
         <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
         <SidebarOption Icon={DraftsIcon} title='Saved items'/>
         <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser'/>
         <SidebarOption Icon={PeopleAltIcon} title='People & user groups'/>
         <SidebarOption Icon={AppsIcon} title='Apps'/>
         <SidebarOption Icon={FileCopyIcon} title='File browser'/>
         <SidebarOption Icon={ExpandLessIcon} title='Show less'/>
         <hr/>
         <SidebarOption Icon={ExpandMoreIcon} title='Show more'/>
        <hr/>
        <SidebarOption Icon={AddIcon} title='Add Channel'/>
            </SidebarContainer>
    )
}



const SidebarContainer= styled.div`
display:flex;
flex-direction:column;
flex:0.3;
color:white;
background: var(--slack-color);
margin-top:40px;
max-width:260px;
border-top:1px solid #49274b;
`;

const SidebarHeader= styled.div`
display:flex;
border-bottom: 1px solid #49274b;
padding:13px;

> .MuiSvgIcon-root{
    padding:8px;
    color:#49274b;
    font-size:18px;
    background-color:white;
    border-radius:999px;
    
}

`;

const SidebarInfo= styled.div`

color:white;
flex:1;

>h3 >.MuiSvgIcon-root{
 color:green;   
 font-size:14px;
 margin-top:1px;
 margin-right:2px;

}


>h2{
    font-size:15px;
    font-weight:900;
    margin-bottom:5px;
}

>h3{
    display:flex;
    font-size:13px;
    font-weight: 400;
    align-items:center;
}
`;


