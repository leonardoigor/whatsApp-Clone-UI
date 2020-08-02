import styled from 'styled-components';
import {Check} from '@styled-icons/boxicons-regular/Check';
import {CheckDouble} from '@styled-icons/boxicons-regular/CheckDouble';

export const Container = styled.div`
  overflow:hidden;
  display: flex;
  justify-content: ${props => props.from !== "me" ? "flex-end" : 'flex-start'};

  padding:10px;
`;
export const ToMe = styled.div`
  max-width:100%;
  overflow: auto;
  >div{
    max-width: 82%;
    width: fit-content;
    margin-left:25px;
  
    >div{
      background:#ffffff;
      padding: 6px 7px 8px 9px;
      overflow-wrap: break-word;
      border-radius: 7.5px;
      border-top-left-radius: 7.5px;
      border-top-right-radius: 7.5px;
      border-bottom-right-radius: 7.5px;
      border-bottom-left-radius: 7.5px;
    }
  }
`

export const FromMe = styled.div`
max-width:100%;
  overflow: auto;
  >div{
    max-width: 82%;
    width: fit-content;
    margin-left:25px;
    overflow:hidden;
    padding:10px;
  
    >div{
      background:#dcf8c6;
      padding: 8px 42px 8px 9px;
      overflow-wrap: break-word;
      border-radius: 7.5px;
      border-top-left-radius: 7.5px;
      border-top-right-radius: 7.5px;
      border-bottom-right-radius: 7.5px;
      border-bottom-left-radius: 7.5px;
      width:100%;
      display: flex;
      justify-content: space-around;

    }
  }
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
