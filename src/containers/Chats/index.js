import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, FlatList, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const { width } = Dimensions.get('screen')
const myName = "Martina Wolna"
const myPicUrl = require('../../assets/user.png')
const data1 = [
  { picUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", name: "Bożenka Malina" },
  { picUrl: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Anastazja Ziemkowska" },
  { picUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Magdalena Pomorska" },
  { picUrl: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Możenka Walina" },
  { picUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Odeusz Piotrowski" },
  { picUrl: "https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Maciej Orłowski" },
]
const data2 = [
  { picUrl: "https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Maciej Orłowski", time: "08:43", message: "maciej.kowalski@email.com" },
  { picUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Odeusz Piotrowski", time: "Tue", message: "Will do, super, thank you" },
  { picUrl: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Możenka Walina", time: "Sun", message: "Uploaded file." },
  { picUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Magdalena Pomorska", time: "23 March", message: "Here is another tutorial, if you..." },
  { picUrl: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", name: "Anastazja Ziemkowska", time: "18 Mar", message: "😂" },
  { picUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", name: "Bożenka Malina", time: "01 Feb", message: "no pracujemy z domu przez 5 ..." },
]

class Chats extends React.Component {
  state = {
    search: ""
  }
  _renderItem = ({ item }) => {
    const { navigation: { navigate } } = this.props
    const data = {
      recipentsName: item.name,
      recipentsPicUrl: item.picUrl,
      myPicUrl,
      myName,
    }
    return <TouchableOpacity
      onPress={() => navigate('Chat', { data })}
      style={styles.chatRoomContainer}>
      <ImageBackground source={{ uri: item.picUrl }} style={styles.imageBackground}>
        <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/heart.png')} style={styles.heart} />
        </TouchableOpacity>

      </ImageBackground>

    </TouchableOpacity>

  }
  render() {
    const { navigation: { navigate } } = this.props
    const { search } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image source={myPicUrl} style={styles.profile} />
          <Text style={styles.profileText}>{myName}</Text>
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
            data={data1}
            horizontal
            renderItem={this._renderItem}
          />
          {
            data2.map((user) => {
              const data = {
                recipentsName: user.name,
                recipentsPicUrl: user.picUrl,
                myPicUrl,
                myName,
              }
              return <TouchableOpacity
                onPress={() => navigate('Chat', {data})}
                style={styles.chatItem}>
                <Image style={styles.chatProfile} source={{ uri: user.picUrl }} />
                <View style={{ marginLeft: 15, flex: 1 }}>
                  <View style={styles.innerContainer}>
                    <Text numberOfLines={1} style={[styles.chatText, { flex: 1 }]}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.chatText}>{user.time}</Text>
                  </View>
                  <Text numberOfLines={1} style={styles.message}>{user.message}</Text>
                </View>
              </TouchableOpacity>
            })
          }
        </ScrollView>
      </View>
    );
  }
}
export default Chats


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