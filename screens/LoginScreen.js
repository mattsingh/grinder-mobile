import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function LoginScreen() {
    const [login, onChangeLogin] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Text>Please enter account information</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeLogin}
                    value={login}
                    placeholder="Username or Email"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                />
                <Button
                    title="Login"
                    onPress={() => console.log(login + ' ' + password)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexBasis: 'auto',
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor:'#242121',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: '#fff'
      },
      input: {
        backgroundColor: '#fff',
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    buttons: {
    },
});