import React from 'react';

import {
  Container,
  ToMe,
  FromMe,
  CheckDoubleIcon,
  CheckIcon
} from './styles';

function Message(props) {
  const Status = () => {
    return props.sended ? (<CheckDoubleIcon viewed={props.viewed} />) : (<CheckIcon />)
  }
  console.log(props)
  return <Container {...props} >
    {props.from === "me" ? (
      <ToMe {...props} >
        <div>
          <div>
            {props.msg}
          </div>
        </div>

      </ToMe>
    ) : (
        <FromMe {...props} >
          <div>
            <div>
              {props.msg} {Status()}
            </div>
          </div>
        </FromMe>
      )}
  </Container>;
}

export default Message;