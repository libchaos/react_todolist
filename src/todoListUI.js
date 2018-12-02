import React, { Component } from 'react'
import {Input, Button, List} from 'antd'
import 'antd/dist/antd.css'

const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginBottom: '10px'}}>
    <div>
      <Input placeholder="todo" style={{width: '400px', marginRight: '10px'}} value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>submit</Button>
    </div>
    <List
      style={{marginTop: '10px', width: '400px'}}
      bordered
      dataSource={props.list}
      renderItem={(item, index) => (<List.Item onClick={()=>{props.handleItemClick(index)}}>{item}</List.Item>)}
    />
  </div>
  )
}


// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{marginTop: '10px', marginBottom: '10px'}}>
//       <div>
//         <Input placeholder="todo" style={{width: '400px', marginRight: '10px'}} value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>submit</Button>
//       </div>
//       <List
//         style={{marginTop: '10px', width: '400px'}}
//         bordered
//         dataSource={this.props.list}
//         renderItem={(item, index) => (<List.Item onClick={(index)=>{this.props.handleItemClick(index)}}>{item}</List.Item>)}
//       />
//     </div>
//     )
//   }
// }


export default TodoListUI