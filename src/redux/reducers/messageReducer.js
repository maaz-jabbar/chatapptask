import { useCardAnimation } from '@react-navigation/stack';
import messages from './messages'
import {SEND_MESSAGE} from '../constants'

const INITIAL_STATES = {
  messages,
  user: {}
};

export default function (state = INITIAL_STATES, action) {
  switch (action.type) {

    case SEND_MESSAGE:
      const {userId,textMessage}= action.payload;
      let messagesTemp = [...state.messages]
      let userIndex = messagesTemp.findIndex((message)=>message.user.userId === userId)
      messagesTemp[userIndex].messages.push({message:textMessage,sentBy:'me'})
      return {
        ...state,
        messages:[...messagesTemp]
      };
    default:
      return state;
  }
}
