import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { connect } from 'react-redux';
import {sendMessage} from '../../redux/actions/action'

class Chat extends React.Component {
  state = {
    textMessage: "",
  }
  _renderItem = ({ item, index }) => {
    if (item?.dateNew)
      return <Text style={styles.dateContainer}>{item.dateNew}</Text>
    return <View
      style={[styles.messageBox, { alignSelf: item.sentBy === "me" ? 'flex-end' : 'flex-start', backgroundColor: item.sentBy === "me" ? "#272A35" : "#373E4E" }]}>
      <Text style={{ color: 'white' }}>{item.message}</Text>
    </View>

  }
  addMessage = () => {
    const { textMessage } = this.state
    const {item:{user:{userId}}} = this.props.route.params
    const { sendMessage } = this.props
    this.setState({textMessage: "" })
    sendMessage(userId,textMessage)
    setTimeout(() => {
      this.flatref.scrollToEnd({ animated: true })
    }, 100);
  }

  render() {
    const {item:{messages,user}} = this.props.route.params
    const { textMessage } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.innerContainer}>
            <Image source={require('../../assets/user.png')} style={styles.profilePic} />
            <Image source={{ uri: user.picUrl }} style={[styles.profilePic, { marginLeft: 10 }]} />
          </View>
          <View style={{ alignItems: 'flex-end' }}>

            <Text style={[styles.name, { marginBottom: 5 }]}>Martina Wolna</Text>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        </View>
        <FlatList
          ref={ref => this.flatref = ref}
          onLayout={() => this.flatref.scrollToEnd({ animated: true })}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          style={{ marginVertical: 10 }}
          data={messages}
          renderItem={this._renderItem}
        />
        <View style={styles.innerContainer}>
          <View style={styles.messagecontainer}>
            <TextInput
              value={textMessage}
              placeholder="Write"
              onChangeText={textMessage => this.setState({ textMessage })}
              placeholderTextColor={'#a5a7ac'}
              style={styles.messageInput}
            />
            <TouchableOpacity
              onPress={this.addMessage}
              style={styles.messageSend}>
              <Image source={require('../../assets/message.png')} style={{ height: 25, width: 25 }} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.camera}>
            <Image source={require('../../assets/camera.png')} style={{ height: 22, width: 22, tintColor: 'white' }} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state){
  return({
    messages : state.messageReducer.messages
  })
}
function mapDispatchToProps(dispatch){
  return({
    sendMessage: (userId,textMessage) => {
      dispatch(sendMessage(userId,textMessage))
  }  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292F3F',
    paddingHorizontal: 20,
    paddingVertical: getStatusBarHeight() + 20
  },

  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },

  name: {
    color: 'white',
    fontSize: 18,
  },

  messagecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#20242f',
    overflow: 'hidden'
  },

  messageInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 16
  },

  messageSend: {
    backgroundColor: '#565e70',
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  camera: {
    backgroundColor: '#01ac83',
    height: 50,
    width: 50,
    borderRadius: 10,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  dateContainer: {
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10
  },

  messageBox: {
    maxWidth: '80%',
    overflow: 'hidden',
    borderRadius: 20,
    padding: 15,
    marginVertical: 10
  }
})