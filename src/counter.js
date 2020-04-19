import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import {connect} from 'react-redux';

 class Counter extends Component{
    constructor(props){
        super(props);
       
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:"center", alignItems:"center",backgroundColor:"red"}}>
    <Text style={{marginBottom:20}}>Count is {this.props.counter}</Text>
    {console.log("Count",this.props.decreaseCount)}
    <Button  style={{marginBottom:20}} title="increase" onPress={this.props.increaseCount}/>
    <Button  style={{marginBottom:20}} title="decrease" onPress={this.props.decreaseCount}/>
           </View>
        )
    }
}

const mapStateToProps=(state)=>{
    return{counter: state.counter.counter};
}

const mapDispatchToProps=(dispatch)=>{
    return {
    increaseCount: ()=> dispatch({
        type:"Increase_Counter",
        value:1
    }),
    decreaseCount: ()=> dispatch({
        type:"Decrease_Counter",
        value:1
    })
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)