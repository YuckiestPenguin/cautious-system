import React, {Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';
// import firebase from 'firebase';

class App extends Component {
    // componentWillMount() {
    //     firebase.initializeApp({
    //         apiKey: 'AIzaSyD3ttzq6xFFCI43ehStUJT_roYPKZG0j40',
    //         authDomain: 'react-native-auth-c6f7d.firebaseapp.com',
    //         databaseURL: 'https://react-native-auth-c6f7d.firebaseio.com',
    //         projectId: 'react-native-auth-c6f7d',
    //         storageBucket: 'react-native-auth-c6f7d.appspot.com',
    //         messagingSenderId: '282570012698'
    //     });
    // }
    render() {
        return (
            <View>
                <Header headerText="auth"/>
                <LoginForm/>
            </View>
        )
    }
}

export default App;