const initialState={counter:0}

const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Increase_Counter":
            return{...state,counter:state.counter + action.value};
            case "Decrease_Counter":
                return{...state,counter:state.counter - action.value};
                default:
                    return state;
    }
}
export default CounterReducer;