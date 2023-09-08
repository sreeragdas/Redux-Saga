import {put, call, takeEvery} from 'redux-saga/effects';
//put : to call action and helps to trigger function
//call: used to call api
// funtion* are called as generated function
import axios from 'axios';
import { getCatSucess,getCatsFailure,getCatsFetch } from './catState';
//yeild : allows to use generator functions sequentially

function* workGetCatsFetch() {
    const cats = yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'))
    const formatedcat= yield cats.json()
    const catformatedshortned = formatedcat.slice(0,10)
    yield put(getCatSucess(cats))

}
function* catSaga () {
    //generated funtion , it works as asyn and await
    //here takeEvery (takeEvery('cats/getCatsFetch')) contains cats and getCatFetch here cat refer to name from catSaga and getCatsFetch case name from catState
    yield takeEvery('cats/getCatsFetch' , workGetCatsFetch)
}

export default catSaga;