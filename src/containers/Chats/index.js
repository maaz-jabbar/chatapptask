import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, FlatList, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { connect } from 'react-redux';
const { width } = Dimensions.get('screen')

class Chats extends React.Component {
  state = {
    search: ""
  }
  _renderItem = ({ item }) => {
    const { navigation: { navigate } } = this.props
    const {user} = item;
    return <TouchableOpacity
      onPress={() => navigate('Chat', { item })}
      style={styles.chatRoomContainer}>
      <ImageBackground source={{ uri: user.picUrl }} style={styles.imageBackground}>
        <Text numberOfLines={2} style={styles.name}>{user.name}</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/heart.png')} style={styles.heart} />
        </TouchableOpacity>

      </ImageBackground>

    </TouchableOpacity>

  }
  render() {
    const { navigation: { navigate },messages,user } = this.props
    const { search } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={{uri:user.picUrl}} style={styles.profile} />
          <Text style={styles.profileText}>{user.name}</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              value={search}
              placeholder="Search..."
              onChangeText={search => this.setState({ search })}
              placeholderTextColor={'#a5a7ac'}
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Image source={require('../../assets/search.png')} style={styles.searchIcon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.plusContainer}>
            <Image source={require('../../assets/plus.png')} style={styles.plusIcon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          style={styles.scrollContainer}
        >
          <Text style={styles.chatRoomText}>Chatrooms</Text>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20, paddingRight: 5 }}
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
            data={messages}
            horizontal
            renderItem={this._renderItem}
          />
          {
            messages.map((item) => {
              let {user,lastMessageTime,messages} = item;
              return <TouchableOpacity
                onPress={() => navigate('Chat', {item})}
                style={styles.chatItem}>
                <Image style={styles.chatProfile} source={{ uri: user.picUrl }} />
                <View style={{ marginLeft: 15, flex: 1 }}>
                  <View style={styles.innerContainer}>
                    <Text numberOfLines={1} style={[styles.chatText, { flex: 1 }]}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.chatText}>{lastMessageTime}</Text>
                  </View>
                  <Text numberOfLines={1} style={styles.message}>{messages[messages.length-1].message}</Text>
                </View>
              </TouchableOpacity>
            })
          }
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state){
  return({
    messages : state.messageReducer.messages,
    user : state.messageReducer.user
  })
}

export default connect(mapStateToProps)(Chats)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292F3F',
    paddingHorizontal: 20,
    paddingTop: getStatusBarHeight() + 20
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  profile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2
  },

  profileText: {
    color: 'white',
    fontSize: 32,
    marginLeft: 15
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 15,
    backgroundColor: '#20242f',
    marginBottom: 7.5
  },

  searchInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 16
  },

  searchButton: {
    backgroundColor: '#565e70',
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  searchIcon: {
    height: 30,
    width: 30
  },

  plusContainer: {
    backgroundColor: '#04aaf1',
    height: 50,
    width: 50,
    borderRadius: 10,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center', marginTop: 5
  },

  plusIcon: {
    height: 20,
    width: 20,
    tintColor: 'white'
  },

  scrollContainer: {
    width,
    flex: 1,
    marginLeft: -20
  },

  chatRoomText: {
    fontSize: 24,
    color: 'white',
    marginLeft: 30,
    marginVertical: 7.5
  },

  chatItem: {
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },

  chatProfile: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2
  },

  chatText: {
    color: "white",
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 3
  },

  message: {
    color: "white",
    fontSize: 16
  },

  chatRoomContainer: {
    height: 160,
    width: 115,
    overflow: 'hidden',
    marginRight: 15,
    borderRadius: 40
  },

  imageBackground: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end'
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 15
  },

  heart: {
    height: 20,
    width: 20,
    alignSelf: 'flex-end',
    marginRight: 10
  },


})