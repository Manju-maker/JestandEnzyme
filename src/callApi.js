import axios from 'axios';

const CallApi=(method,reqURL,data={},headers={})=>{
    return new Promise((resolve,reject)=>{
        let  url=`http://192.168.1.3:8080/${reqURL}`
        let option={
            method,
            url,
            data,
            headers
        }

        if(method==="get") delete option["data"];

        axios({...option}).then(response=>{
            resolve(response)
        }).catch(err=>{
            reject(err);
        })
    })
}
export { CallApi };