import React, {useState} from 'react';

import {
  Container,
  ProfileImg,
  ProfileContent,
  MarklIcon,
  ArrowDownlIcon,
  CheckDoubleIcon,
  CheckIcon
} from './styles';

function ChatContact(props) {
  const [isVisible, setIsVisible] = useState(false)
  const [UserComputed, setUserComputed] = useState({...props})
  const msg = () => {
    let newMsg = []
    UserComputed.msg.map(r => {
      newMsg.push(r)
    })
    return newMsg[newMsg.length - 1]

  }
  const view = (msg) => {
    if(msg.from !== 'me') {
      return msg.sended ? (<CheckDoubleIcon viewed={msg.viewed} />) : (<CheckIcon />)
    } else {
      return false
    }
  }
  const msgStyleInline = Object.assign({},
    {fontWeight: !msg().viewed && msg().from === "me" ? "bold" : "400"},
    {color: !msg().viewed && msg().from === "me" ? "#000" : ""}
  )

  return <Container
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
    isVisible={isVisible}
    onClick={() => {
      props.chooseChat({...props}, user => {
        user.map(r => {
          if(r.id === UserComputed.id) {
            setUserComputed(r)
          }
        })
      });

    }}
    isSelected={UserComputed}

  >
    <ProfileImg src={UserComputed.img ? UserComputed.img : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} />
    <ProfileContent >
      <div className="name">{UserComputed.name || 'anonymous'}</div>
      <div className="msg" style={msgStyleInline}> {view(msg())}{msg().msg || ''}</div>
      <div className="painel">
        <span>Ontem</span>
        <div className="mark" >
          <div className="markIcon" >
            <MarklIcon />
          </div>

          <div className="ArrowIcon" style={{display: `${isVisible ? 'inline' : 'none'}`}}>
            <ArrowDownlIcon isVisible={isVisible} />
          </div>
        </div>
      </div>
      <div className="separate"></div>
    </ProfileContent>
  </Container >;
}

export default ChatContact;