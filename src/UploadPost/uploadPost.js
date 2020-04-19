import React,{Component} from 'react';
import {View,TouchableOpacity,Text, Button,Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import { CallApi } from '../callApi';
class UploadPost extends Component{
    constructor(){
        super();
        this.state={photo:null}
    }

    choosePhoto=()=>{
        const options= { noData : true}

        ImagePicker.launchImageLibrary(options,response=>{
            if(response.uri){
                console.warn("response>",response)
                this.setState({photo:response})
            }
        })

    }

    uploadPost=()=>{
const {photo}=this.state;
const data={name:"manju"}
        var formData = new FormData();
        formData.append("name",data.name);
        formData.append("photo",{
        uri: this.state.photo.uri,
        type: 'image/jpeg',
        name: this.state.photo.fileName,
        size: this.state.photo.fileSize,
        })

        console.log("response>>",formData)
        CallApi("post","timeline/uploadImage",formData).then(response=>{
            console.log("response>>",response)
        }).catch(err=>{
            console.log("err>",err)
        })

    }
  
    render(){
        const {photo} = this.state;
        return(
        <View style={{flex:1}}>
            <View style={{flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                        <Icon name="bars" size={40} color="black" />
                    </TouchableOpacity>
                    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}><Text style={{fontSize:20, fontWeight:"bold"}}>Upload Post</Text></View>
           </View>
           <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
               <View style={{borderColor:"black",borderWidth:5,backgroundColor:"yellow",height:100,width:100}}>
                   {photo !== null &&
               <Image style={{height:100,width:100}} source={{uri:photo.uri}} />
                   }
               </View>
               <Button title="choose photo" onPress={this.choosePhoto}/>

               <Button title="Upload" onPress={this.uploadPost} />
           </View>
        </View>
        )
    }
}
export default UploadPost;