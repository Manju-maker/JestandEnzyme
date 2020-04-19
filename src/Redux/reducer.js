const initialState={ userInfo:null}

const Reducer =(state=initialState,action)=>{
    switch(action.type){
        case "USERINFO":
            return {...state, userInfo:action.data}
            case "LOGOUT":
                return {...state, userInfo:null}
    }

}
export default Reducer;