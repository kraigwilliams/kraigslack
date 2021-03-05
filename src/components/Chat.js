import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
// import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import {useSelector} from 'react-redux'
import {selectRoomId} from '../features/appSlice';

function Chat() {

    const roomId = useSelector(selectRoomId);
  return (
    <ChatContainer>
      <>

      <Header>
        <HeaderLeft>
          <h4>
            <strong>#Room-name</strong>
          </h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
            <InfoOutlinedIcon/>
            <p>Details</p>
        </HeaderRight>
      </Header>
   
   <ChatMessages>
       {/* list all messages */}
       </ChatMessages>
<ChatInput channelId={roomId}/>
    

      </>
    </ChatContainer>
  );
}


export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right:20px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
display:flex;
align-items:center;


  > p {
    margin-left:20px;
  }
`;

const ChatMessages=styled.div`


`;