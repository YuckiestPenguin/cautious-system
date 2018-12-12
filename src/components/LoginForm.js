import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from "./common";

class LoginForm extends Component {
    state = { email: '', password: '' };
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label="Email"
                        placeholder="user@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true}
                    />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;