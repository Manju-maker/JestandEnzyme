import React,{Component} from 'react';
import {View,Text,Button,TouchableOpacity,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
class Timeline extends Component{
    constructor(){
        super();
        this.state={data:[]}
    }
    componentDidMount(){
        let a = [{name:"manju"},{name:"anju"},{name:"Vikas"}]
        this.setState({data:a})
    }



  
    render(){
        return(
            <View style={{flex:1}}>
                <FlatList data={this.state.data}
                renderItem={({item})=>{
                    console.log("item",item)
                    return (
                        <View style={{flexDirection:"row"}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} >
                            <Icon name="bars" size={40} color="black" />
                         </TouchableOpacity>
                        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontSize:20, fontWeight:"bold"}}>{item.name}</Text>
                            </View>
                        </View>
                         
                 
                    )
                }} />
                   </View>
        )
    }
}
export default Timeline;