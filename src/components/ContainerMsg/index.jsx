import React, {useState} from 'react';

import {
  Container,
  ProfileBar,
  ProfileChat,
  ProfileSearch,
  SearchIcon,
  ClipIcon,
  MenuIcon,
  EmogisIcon,
  InputText,
  RecordIcon,
  NotSelectContainer
} from './styles';
import Message from '../Message';



const isChat = (props, Msg, SetMsg, sendmsg) => {
  return props.name ? <>
    <ProfileBar >
      <div className="leftMenu">
        <img src={props.img} alt="" />
        <div className="statusContainer">
          <span>{props.name}</span>
          <span className="status">Online</span>
        </div>
      </div>
      <div className="barMenu">
        <SearchIcon />
        <ClipIcon />
        <MenuIcon />
      </div>

    </ProfileBar>

    <ProfileChat >
      {props.msg.map(r => {
        return <Message {...r} key={r.id} AddMsg={props.AddMsg} />

      })}
    </ProfileChat>

    <ProfileSearch >
      <div>
        <EmogisIcon />
        <InputText value={Msg} onChange={SetMsg} onKeyPress={sendmsg} />
        <RecordIcon />
      </div>
    </ProfileSearch>
  </>
    : (
      <NotSelectContainer >
        <div className="logo">
          <img src={require('../../assets/images/intro-connection-light.jpg')} alt="" />
        </div>
        <div className="title">Mantenha seu celular connectado</div>
        <div className="desc">O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</div>

      </NotSelectContainer>

    )
}
function ContainerMsg(props) {

  const [Msg, setMsg] = useState('')

  const sendMSG = (e) => {
    if(e.which === 13) {
      props.AddMsg(props, Msg)
      setMsg('')
    }
  }
  const HandleMsg = (msg) => {
    setMsg(msg.target.value)
  }

  return <Container isSelected={props.isSelected || false}>
    {isChat(props, Msg, HandleMsg, sendMSG)}
  </Container>;
}

export default ContainerMsg;