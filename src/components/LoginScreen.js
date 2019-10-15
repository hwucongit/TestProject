import React, {Component} from 'react'
import {View,Text,TextInput,StyleSheet, Button, TouchableOpacity} from 'react-native'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
    }

    onLoginPress = () => {
        if(this.state.username == "admin"
            && this.state.password =="admin"){
            alert("Success");
        }else {
            alert("Fail");
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Username</Text>
                <TextInput
                    placeholder="Type username"
                    onChangeText={(text) => this.setState({username: text})} />
                <Text style={styles.title}>Password</Text>
                <TextInput 
                    placeholder="Type password" 
                    secureTextEntry = {true}
                    onChangeText={(text) => this.setState({password: text})}/>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onLoginPress}
                >
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    title: {
        color: 'black',
        fontSize: 20,
    },
    button: {
        height: 40,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: 'white'
    }
})
