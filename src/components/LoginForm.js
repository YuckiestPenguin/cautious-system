import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {Card, CardSection, Button} from "./common";

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput style={{height: 20, width: '100%'}}/>
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;