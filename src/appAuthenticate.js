import React,{Component} from 'react';
import {View} from 'react-native';
class AppAuthenticate extends Component{
    constructor(){
        super();
        this.state={count:0}
    }

    componentDidMount(){
        if(this.state.count===0){
        this.props.navigation.navigate("MainStack")
        }
        else{
            this.props.navigation.navigate("InnerStack")
        }

        
    }
    render(){
        return(
            <View style={{flex:1}}>

            </View>
        )
    }
}
export default AppAuthenticate;