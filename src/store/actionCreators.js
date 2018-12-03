import * as actionTypes from './actionTypes'
import axios from 'axios'
export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = (value) => ({
  type: actionTypes.ADD_TODO_ITEM,
})


export const getDeleteItemAction = (index) => ({
  type: actionTypes.DELETE_ITEM,
  index
})

export const initListAction = (data) => ({
  type: actionTypes.INIT_LIST_ACTION,
  data,
})

export const getInitList = () => ({
  type: actionTypes.GET_INIT_LIST
})

// export const getTodoLIST = () => {
//   return (dispatch) => {
//     axios
//       .get('/api/todolist')
//       .then((res) => {
//         // console.log(res.data)
//         const data = res.data;
//         const action = initListAction(data)
//         dispatch(action)
//       })
//       .catch((err) => console.log(err))
//   }
// }
