import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    state = { loggedIn: null }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD3ttzq6xFFCI43ehStUJT_roYPKZG0j40',
            authDomain: 'react-native-auth-c6f7d.firebaseapp.com',
            databaseURL: 'https://react-native-auth-c6f7d.firebaseio.com',
            projectId: 'react-native-auth-c6f7d',
            storageBucket: 'react-native-auth-c6f7d.appspot.com',
            messagingSenderId: '282570012698'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                )
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />

        }
    }
    render() {
        return (
            <View>
                <Header headerText="auth" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;