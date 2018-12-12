import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from "./common";

class LoginForm extends Component {
    state = { email: '' };
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
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;