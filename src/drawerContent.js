import React,{Component} from 'react';
import {View,TouchableOpacity,Text, StyleSheet} from 'react-native';
import Store from './Redux/store';
import { logoutUser } from './Redux/action';
import {connect} from 'react-redux';
class DrawerContent extends Component{
  constructor(){
      super();
  }

  handlePress=()=>{
      Store.dispatch(logoutUser());
      this.props.navigation.navigate("Login")
  }
  
    render(){
        return(
            <View style={{flex:1,backgroundColor:"#a3c2c2",alignItems:"center"}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Timeline")}} style={styles.content}>
                    <Text style={styles.textStyle}>Timeline</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("UploadPost")}} style={styles.content}>
                    <Text style={styles.textStyle}>Upload Post</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePress} style={styles.content}>
                    <Text style={styles.textStyle}>Logout</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const mapStateToProps=(state)=>{
    return{state};
}

const styles = StyleSheet.create({
  content:{
      width:"90%",
      marginTop:5,
    height:40,
        justifyContent:"center",
         alignItems:"center",
         borderRadius:10,
         backgroundColor:"#4775d1"
  },
  textStyle:{
      fontWeight:"bold"
  }
})
export default connect(mapStateToProps)(DrawerContent);