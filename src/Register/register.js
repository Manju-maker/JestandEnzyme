import React, { Component } from 'react';
import { Text, View, Image, TextInput, Dimensions, StyleSheet, ScrollView } from 'react-native';
import BackArrow from 'react-native-vector-icons/Ionicons';
import DropDown from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegisterBase from './registerBase'

class Register extends RegisterBase {
    render() {
        console.warn("data",this.state.data)
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={style.viewStyle}>
                    <Text style={style.textStyle}>First Name</Text>
                    <TextInput onChangeText={(text)=>{this.handleChange("firstname",text)}}
                     style={style.textInput}
                     onSubmitEditing={()=>this.lastname.focus()} 
                     />

                </View>
                <View style={style.viewStyle}>
                    <Text style={style.textStyle}>Last Name</Text>
                    <TextInput 
                     ref={ref=>(this.lastname=ref)}
                     onChangeText={(text)=>{this.handleChange("lastname",text)}} 
                     style={style.textInput}
                     onSubmitEditing={()=>this.email.focus()}
                      />

                </View>
                <View style={style.viewStyle}>
                    <Text style={style.textStyle}>Email Id</Text>
                    <TextInput
                    ref={ref=>(this.email=ref)}
                    onChangeText={(text)=>{this.handleChange("email",text)}} 
                     style={style.textInput} 
                     onSubmitEditing={()=>this.role.focus()} />

                </View>
                <View style={style.viewStyle}>
                    <Text style={style.textStyle}>Role</Text>
                    <TextInput
                    ref={ref=>(this.role=ref)}
                     onChangeText={(text)=>{this.handleChange("role",text)}} 
                      style={style.textInput}
                      onSubmitEditing={()=>this.password.focus()} />

                </View>
                <View style={style.viewStyle}>
                    <Text style={style.textStyle}>Password</Text>
                    <TextInput
                    ref={ref=>(this.password=ref)}
                    onChangeText={(text)=>{this.handleChange("password",text)}}
                      style={style.textInput}
                      onSubmitEditing={()=>this.confirmPassword.focus()} />

                </View>
                <View style={style.viewStyle}>
                    <Text style={style.textStyle}>Confirm Password</Text>
                    <TextInput 
                    ref={ref=>(this.confirmPassword=ref)}
                     onChangeText={(text)=>{this.handleChange("confirmPassword",text)}} 
                      style={style.textInput}
                      onSubmitEditing={this.handlePress} />

                </View>
                <View style={{height:screenHeight*0.40,marginTop:10}}>
                <TouchableOpacity onPress={this.handlePress} style={style.button}>
                    <Text style={{color:"white"}}>SIGN UP</Text>
                </TouchableOpacity>
                </View>
            

            </ScrollView>


        )
    }
}

var screenHeight = Dimensions.get("window").height;

const style = StyleSheet.create({
    
    viewStyle:{
        height:screenHeight*0.10,
        // marginTop:16
    },
    textStyle: {
        marginTop:16,
        left: 16,
        color: "rgb(143,143,143)",
        fontSize: 12,
        // backgroundColor:"red"
    },

    textInput: {
                //  backgroundColor:"yellow",
        marginHorizontal: 15,
        borderBottomWidth: 0.3,
        borderBottomColor: "rgb(143,143,143)",
        fontSize: 14,
        alignItems: "flex-end",
        height:35
    
    },
    button: {
        backgroundColor: "rgb(38,172,245)",
        borderRadius: 4,
        marginHorizontal: 48,
        height: 48,
        top: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default Register;