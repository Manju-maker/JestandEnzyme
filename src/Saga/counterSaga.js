import {delay,takeEvery,takeLatest,put} from 'redux-saga/effects';

function* increaseCounterAsync(){
    try{
        yield delay(4000);

        yield put({
            type:"Increase_Counter_Async",
            value:1,
        })
    }
    catch(err){
            console.log(err)
    }
}

export function* watchIncreaseCounter(){
    yield takeLatest('Increase_Counter',increaseCounterAsync);
}



function* decreaseCounter(){
    try{
        yield put({
            type:"Decrease_Counter_Async",
            value:1
        })
    }
    catch(err){
        console.log(err);
    }
}

export function* watchDecreaseCounter(){
    yield takeLatest('Decrease_Counter',decreaseCounter);
}