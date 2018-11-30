import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // 当组件的数据发生改变时候，render函数就会重新执行
    this.state = {
      inputValue: 'hello',
      list: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemComplete = this.handleItemComplete.bind(this)
  }
  componentDidMount () {
    axios
      .get('/api/todolist')
      .then((res) => {this.setState((prevState) => ({list: [...prevState.list, ...res.data]}))})
      .catch((err) => {
        console.log(err)
      })
  }



  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value,
    // })
    // const value = e.target.value
    const value = this.input.value
    this.setState(() => ({inputValue: value}))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })

  }

  handleItemComplete(key) {

    this.setState((prevState) => {
      let list = [...prevState.list]
      list.splice(key, 1)
      return {
        list,
      }
    })
  }
  getTodoItem() {

    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem content={item} index={index} deleteItem={this.handleItemComplete}/>
        </div>
      )
    })
  }

  render() {
    return (<Fragment>
      <div>
        <label htmlFor="insertValue">输入内容</label>
        <input
          type="text"
          id="insertValue"
          value={this.state.inputValue}
          ref={(input) => {this.input = input}}
          onChange={this.handleInputChange}
          />
        <button onClick={this.handleBtnClick}>提交</button>
      </div>
      <ul ref={(ul) => {this.ul = ul}}>
        {this.getTodoItem()}
      </ul>
    </Fragment>)
  }
}

export default TodoList

