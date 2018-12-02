import React, {Component} from 'react'
import TodoListUI from './todoListUI'
import store from './store'
import * as actionTypes from './store/actionTypes'
import * as actionCreators from './store/actionCreators'
import axios from 'axios'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleInputChange(e) {
    // const action = {
    //   type: actionTypes.CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = actionCreators.getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    // const action = {
    //   type: actionTypes.ADD_TODO_ITEM,
    // }
    const action = actionCreators.getAddItemAction()
    store.dispatch(action)
  }

  handleItemClick(index) {
    // const action = {
    //   type: actionTypes.DELETE_ITEM,
    //   index
    // }
    const action = actionCreators.getDeleteItemAction(index)
    store.dispatch(action)
  }

  render() {
    return (<TodoListUI
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      handleItemClick={this.handleItemClick}
    />)
  }

  componentDidMount () {
    const action = actionCreators.getTodoLIST()
    store.dispatch(action)
  }

}

export default TodoList