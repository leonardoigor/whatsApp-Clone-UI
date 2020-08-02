import React from 'react';

import {
  Container,
  Header,
  SistemMSG,
  SearchContainer,
  UsersContent,
  CircleIcon,
  MsgIcon,
  MenuIcon,
  SearchIcon
} from './styles';
import ChatContact from '../ChatContact';

function Side(props) {
  return <Container >
    <Header >
      <div className="header">
        <img src={require('./../../assets/images/ppI.jpeg')} alt="" />
        <div>
          <CircleIcon>
            <div className="b1"></div>
            <div className="b2"></div>
            <div className="b3"></div>
          </CircleIcon>
          <MsgIcon />
          <MenuIcon />
        </div>
      </div>
    </Header>
    <SistemMSG />
    <SearchContainer >
      <div>
        <SearchIcon />
        <input type="search" placeholder="Procurar ou começar uma nova conversa" />
      </div>
    </SearchContainer>
    <UsersContent >
      <div>
        {props.Users.map((r, i) => <ChatContact {...r} key={i} chooseChat={props.chooseChat} />)}
      </div>
    </UsersContent>
  </Container >;
}

export default Side;