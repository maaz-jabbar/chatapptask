import { useCardAnimation } from '@react-navigation/stack';
import messages from './messages'
import {SEND_MESSAGE} from '../constants'

const INITIAL_STATES = {
  messages,
  user: {
    picUrl:"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name:"Martina Wolna"
  }
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
