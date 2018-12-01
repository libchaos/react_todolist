import React, {Component} from 'react'
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'
import store from './store'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInput = this.handleInput.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  handleInput(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_item',
    }
    store.dispatch(action)
  }

  handleItemClick(index) {
    const action = {
      type: 'delete_item',
      index
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div style={{marginTop: '10px', marginBottom: '10px'}}>
        <div>
          <Input placeholder="todo" style={{width: '400px', marginRight: '10px'}} value={this.state.inputValue}
            onChange={this.handleInput}
          />
          <Button type="primary" onClick={this.handleBtnClick}>submit</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '400px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList