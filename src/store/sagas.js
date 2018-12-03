import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import * as actionCreators from './actionCreators'
import axios from 'axios'


function* getInitList() {
  const res = yield axios.get('/api/todolist')
  const action =  actionCreators.initListAction(res.data)
  yield put(action)
    //  yield axios
    //     .get('/api/todolist')
    //     .then((res) => {
    //       const data = res.data
    //       const action = actionCreators.initListAction(data)
    //       console.log(action)
    //     })
    //     .catch((err) => console.log(err))
}

function* TodoSaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default TodoSaga