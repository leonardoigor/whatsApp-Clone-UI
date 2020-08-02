import React, {Component} from 'react';

import {Container, Content} from './styles';
import Side from '../Side';
import ContainerMsg from '../ContainerMsg';


class layout extends Component {
  state = {
    UserChoosed: null,
    Users: [
      {
        id: 0,
        name: 'Marcos vinicius',
        msg: [
          {
            id: 0,
            from: 'you',
            to: 'me',
            msg: 'Ligou ND mano kkk',
            viewed: false,
            sended: false

          },
          {
            id: 1,
            from: 'me',
            to: 'you',
            msg: 'Lolzinho hoje? ate o challange!',
            viewed: false,
            sended: false
          }
        ],
        img: require('../../assets/images/ppM.jpeg'),
        isSelected: false
      },
      {
        id: 1,
        name: 'igor',
        msg: [
          {
            id: 0,
            from: 'me',
            to: 'you',
            msg: 'Lolzinho hoje? ate o challange!',
            viewed: false,
            sended: false
          }
        ],
        img: require('../../assets/images/ppI.jpeg')
        , isSelected: false
      },
      {
        id: 2,
        name: 'joao',
        msg: [
          {
            id: 0,
            from: 'you',
            to: 'me',
            msg: 'Lolzinho hoje? ate o challange!',
            viewed: true,
            sended: true
          }
        ],
        img: require('../../assets/images/02.jpg'),
        isSelected: false
      },
      {
        id: 3
        , name: 'Gabi',
        msg: [
          {
            id: 0,
            from: 'me',
            to: 'you',
            msg: 'Lolzinho hoje? ate o challange!',
            viewed: false,
            sended: false
          }
        ],
        img: require('../../assets/images/01.jpg'),
        isSelected: false
      },
    ]
  }


  render() {
    const chooseChat = (user, cb) => {
      let CurrentUser = null;
      const Users = this.state.Users.map(r => {
        if(r.id !== user.id) {
          r.isSelected = false;
        } else {
          r.isSelected = true;
          r.msg.map(m => m.viewed = true)
          CurrentUser = r;
        }
        return r
      })
      this.setState({Users, UserChoosed: CurrentUser}, () => cb(Users))
    }

    const AddMsg = (user, msg, cb) => {
      let customId = user.msg.length;

      let CurrentMSg = user.msg.push({
        id: customId,
        from: 'you',
        to: 'me',
        msg,
        viewed: false,
        sended: false
      })
      const lastUsers = this.state.Users
      console.log(user)
      lastUsers.map(r => {
        if(r.id === user.id) {
          r = user
        }
      })

      this.setState({Users: lastUsers}, () => {
        lastUsers.map(r => {
          if(r.id === user.id) {
            setTimeout(() => {
              let msgcontainer = r.msg[customId]
              msgcontainer.sended = true
              this.setState({Users: lastUsers}, () => {

                setTimeout(() => {
                  let msgcontainer = r.msg[customId]
                  msgcontainer.viewed = true
                  this.setState({Users: lastUsers})
                }, 1000)
              })
            }, 1000);
          }
        })
      })

    }

    return <Container >
      <Content >
        <Side Users={this.state.Users} chooseChat={chooseChat}></Side>
        <ContainerMsg {...this.state.UserChoosed} AddMsg={AddMsg}> </ContainerMsg>
      </Content>
    </Container>;
  }
}

export default layout;