import styled from 'styled-components';
import {Search} from '@styled-icons/icomoon/Search'

import {MessageAltDetail} from '@styled-icons/boxicons-solid/MessageAltDetail'
import {EllipsisV} from '@styled-icons/fa-solid/EllipsisV'

export const Container = styled.div`

border:1px solid #ccc;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
  >div{
    flex:1;
    width:100%;
  }
`;

export const Header = styled.div`

max-height:59px;
background:#ededed;
>div{
  padding: 10px 16px;
  width:auto;
  height:100%;
  display:flex;
  justify-content:space-between;

  >img{
    width:40px;
    height:40px;
    border-radius:50%
  }
  >div{
    width:140px;
    height:40px;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
}
`
export const SistemMSG = styled.div`
max-height:89px;
background:red;
display:none;
`

export const SearchContainer = styled.div`
max-height:49px;
display:flex;
align-items:center;
justify-content:center;
border-bottom:1px solid #ccc;
background:#f6f6f6;
>div{
  padding:10px 16px;
  background:#fff;
  width:88%;
  border-radius:22px;
  >input{
    height:20px;
    width:88%;
    background:transparent;

    &:focus{
      outline:none;
    }
  }
}
`

export const UsersContent = styled.div`
overflow-y:auto;
overflow-x: hidden;

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:#f1f1f1; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


position:relative;
background:white;
>div{
  position:absolute;
}
`

export const CircleIcon = styled.div`
width:12px;
height:12px;
border:3px solid #919191;
position:relative;
border-radius:50%;
>.b1{
  background:#ededed;
  width:5px;
  height:11px;
  position:absolute;
  top:-5px;
  left:31%;
}>.b2{
  background:#ededed;
  width:3px;
  height:11px;
  position:absolute;
  top:4px;
  left:5%;
  transform:rotate(49deg)
}>.b3{
  background:#ededed;
  width:3px;
  height:11px;
  position:absolute;
  top:4px;
  right:-1%;
  transform:rotate(139deg)
}

&:after{
  width:5px;
  height:5px;
  background:#009588;
  content:'0';
  border-radius:50px;
  font-size:0px;
  display:block;
  position:absolute;
  right: 0;
  top: -4px;
}
cursor:pointer
`

export const MsgIcon = styled(MessageAltDetail)`
color:#919191;
width:20px;
height:20px;
cursor:pointer
`

export const MenuIcon = styled(EllipsisV)`
color:#919191;
width:20px;
height:20px;
cursor:pointer
`
export const SearchIcon = styled(Search)`
color:#919191;
width:13px;
height:13px;
margin-right:24px

`