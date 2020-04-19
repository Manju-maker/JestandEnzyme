import React,{Component} from 'react';
import axios from 'axios';
import Store from '../Redux/store';
import {setUserInfo} from '../Redux/action';

export default class RegisterBase extends Component{
    constructor(){
        super();
        this.state={firstname:"",lastname:"",email:"",role:"",password:"",confirmPassword:""}
    }


    handlePress1=()=>{
        this.setState(Object.assign(this.state.data,{abc:'someOtherName'}));
    }

    handlePress=()=>{
        CallApi('post','register',this.state).then(response=>{
        //   Store.dispatch(setUserInfo(response.data))
       })
    }

    handleChange=(field,text)=>{
        this.setState({[field]:text});
    }
}