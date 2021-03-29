import React, { Component } from 'react'

//Navigations here
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import {
    Chats,
    Chat,
} from './containers';



const Stack = createStackNavigator();

const MainStack = () => {
    return <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Chats"
            component={Chats}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
}

class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen
                        name="Main"
                        component={MainStack}
                        options={{ headerShown: false, }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default Navigation;
