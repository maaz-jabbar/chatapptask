import {SEND_MESSAGE} from '../constants'
export function sendMessage(userId,textMessage) {
    return (dispatch) => {
        dispatch({ type: SEND_MESSAGE, payload:{userId,textMessage} });
    }
}