import React, { Component } from 'react';
import { Text, View, Image, TextInput, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CallApi } from '../callApi';
import {connect} from 'react-redux';

class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(){
        super();
        this.state={email:"",password:""}
    }
    onClick=()=>{
        CallApi('post','login',this.state).then(response=>{
            this.props.navigation.navigate("Timeline",{count:1});
             Store.dispatch(setUserInfo(response.data))
         })
       
    }
    register = () => {
        this.props.navigation.navigate("Register")
    }
    render() {
        const sheight = Dimensions.get("window").height;
        return (
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Image source={{ uri: "icon" }} style={style.imageStyle} />
                <Text style={{ marginTop: 38, left: 15, color: "rgb(38,172,245)", fontSize: 24, fontFamily: "Nunito-Regular" }}>Welcome</Text>
                <Text style={{ color: "rgb(143,143,143)", left: 15, marginTop: 6, fontSize: 16 }}>Sign in to continue</Text>
                <Text style={{ marginTop: 32, left: 15, color: "rgb(143,143,143)", fontSize: 12 }}>Username</Text>
                <TextInput style={[style.textInput]} onChangeText={(value)=>this.setState({email:value})}></TextInput>
                <Text style={{ marginTop: 24, left: 15, color: "rgb(143,143,143)", fontSize: 12 }}>Password</Text>
                <TextInput style={[style.textInput]} onChangeText={(value)=>this.setState({password:value})}></TextInput>
                <TouchableOpacity onPress={this.onClick} style={{ marginTop: 30, backgroundColor: "rgb(38,172,245)", borderRadius: 4, marginHorizontal: 48, height: 48, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 14, color: "white" }}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 16, alignSelf: "center", fontSize: 12, color: "rgb(143,143,143)" }}>Forgot Password?</Text>
                <View style={{ marginTop: 59, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{}}>Dont have an account? </Text>
                    <TouchableOpacity onPress={this.register}>
                        <Text style={{ color: "rgb(38,172,245)", fontWeight: "bold" }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>

        )
    }
}

const style = StyleSheet.create({

    imageStyle: {
        width: 148,
        height: 50,
        marginTop: 30,
        left: 15
    },

    textInput: {
        marginHorizontal: 15,
        borderBottomWidth: 0.3,
        height: 40,
        borderBottomColor: "rgb(143,143,143)",
        fontSize: 16
    },

container: {
    backgroundColor:"blue",
flex: 1/8,
flexDirection: 'row',
// justifyContent: 'center',
padding: 15,
},

})

const mapStateToProps=(state)=>{
    return{state};
}

export default connect(mapStateToProps)(Login);