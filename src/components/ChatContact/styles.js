import styled from 'styled-components';
import {Thumbtack} from '@styled-icons/fa-solid/Thumbtack';
import {ArrowDownS} from '@styled-icons/remix-line/ArrowDownS';
import {Check} from '@styled-icons/boxicons-regular/Check';
import {CheckDouble} from '@styled-icons/boxicons-regular/CheckDouble';



export const Container = styled.div`
cursor:pointer;
  width:412px;
  height:72px;
  display:flex;
  align-items:center;
  padding-left: 12px;
&:hover{
  background: #f5f5f5
}
  padding-bottom: 0 !important;

  background:${({isSelected: {isSelected}}) => isSelected ? '#ebebeb' : 'tranparent'}
`;

export const ProfileImg = styled.img`
width:49px;
height:49px;
border-radius:50%;
`

export const ProfileContent = styled.div`
flex:1;
height:49px;
padding-left: 21px;
position: relative;

  >.name{
    color:#000;
    font-size: 100%;
    font-weight: 500;
  }
  >.msg{
    font-size: 15px;
    color:#727272;
    margin-top: 6px;
  }
  >.separate{
    margin-top:16px;
    border-bottom:1px solid #ebebeb;
  }
  >.painel{
    position:absolute;
    width:45px;
    height:49px;
    right:20px;
    top:0;
    text-align:center;

    >span{
      font-size: 12px;
      color:#00000073;
      font-weight: 500;
      line-height: 2;
    }
    >.mark{
      display:flex;
      justify-content:center;
      align-items:center;
      display:flex;
      justify-content:${({isVisible}) => isVisible ? "space-between" : 'center'};
    }
  }
`
export const ArrowDownlIcon = styled(ArrowDownS)`
  width: 26px;
  height: 26px;
  color:#c2c2c2;
`
export const MarklIcon = styled(Thumbtack)`
width: 10px;
  height: 10px;
  color:#ffffff;
  background:#c2c2c2;
  padding:5px;
  border-radius:50%;
  transform:rotate(40deg);
  `;

export const CheckIcon = styled(Check)`
  width: 26px;
  height: 26px;
  color:#b2b2b2;
`;
export const CheckDoubleIcon = styled(CheckDouble)`
    width: 21px;
    height: 26px; 
    margin-right: 3px;
  color:${({viewed}) => viewed ? "#4fc3f7" : "#b2b2b2"};
`;
