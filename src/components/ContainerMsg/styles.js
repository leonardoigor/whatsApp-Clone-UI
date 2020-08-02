import styled from 'styled-components';
import {Search} from '@styled-icons/icomoon/Search'
import {Paperclip} from '@styled-icons/evil/Paperclip'
import {EllipsisV} from '@styled-icons/fa-solid/EllipsisV'
import {HappyAlt} from '@styled-icons/boxicons-regular/HappyAlt'
import {MicFill} from '@styled-icons/bootstrap/MicFill'



export const Container = styled.div`
  display:flex;
  flex-direction:column;
  background:#f8f9fb;
  justify-content:center;
  align-items:${({isSelected}) => isSelected ? 'unset' : 'center'};
  overflow:auto;

`;

export const ProfileBar = styled.div`

  max-height:59px;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 10px;
  background:#ededed;

  >.barMenu{
    width:120px;
    display:flex;
    justify-content:space-between;
  }
  >.leftMenu{
    width:84px;
    display:flex;
    align-items:center;
    flex:1;
    >img{
      width:40px;
      height:40px;
      border-radius:50%;
      margin-right:10px;
    }

    >.statusContainer{
      display:flex;
      flex-direction:column;
    }
    >.statusContainer span.status{
      color:#808080;
      font-size:12px;
      margin-top:2px;
    }
  }
`;


export const ProfileChat = styled.div`
  background:url('${require('../../assets/images/wallpaperDefaut.png')}');
  height:100%;
  overflow:auto;
`;



export const ProfileSearch = styled.div`
  max-height:62px;
  height:100%;
  >div{
    background:#f0f0f0;
    display:flex;
    align-items:center;
    height: 100%;
    padding: 0px 15px;
  }
`;


// icons

export const SearchIcon = styled(Search)`
  width:21px;
  height:30px;
  cursor:pointer;
  color:#919191;
`;
export const ClipIcon = styled(Paperclip)`
  width:38px;
  height:30px;
  cursor:pointer;
  color:#919191;
`;
export const MenuIcon = styled(EllipsisV)`
  width:21px;
  height:23px;
  cursor:pointer;
  color:#919191;
  margin-top: 5px;
`;

export const EmogisIcon = styled(HappyAlt)`
  width:26px;
  height:26px;
  color:#919191;
`;

export const InputText = styled.input.attrs({
  placeholder: 'Digite uma mensagem',
})`
  flex:1;
  height:20px;
  padding:9px 12px 11px 12px;
  border:1px solid #fff;
  border-radius:30px;
  font-size:15px;
  
  &:focus{
    outline:none;
  }



  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#bababa;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:#bababa;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:#bababa;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:#bababa;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:#bababa;
}

::placeholder { /* Most modern browsers support this now. */
   color:#bababa;
}
`;

export const RecordIcon = styled(MicFill)`
  width:26px;
  height:26px;
  color:#919191;
`;


export const NotSelectContainer = styled.div`
max-width:460px;
  >.title{
    color: #525252;
    font-weight: 400;
    font-size: 36px;
    margin: auto 12%;
    margin-top: 38px;
  }
  >.desc{
    color:#00000073;
    margin-top: 24px;
    font-size: 14px;
    line-height: 20px;
    text-align:center;
  }
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`