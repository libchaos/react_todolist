import React, {Component} from 'react'

import {connect} from 'react-redux'


class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}/>
          <button onClick={this.props.handleClick}>submit</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (e) => {
      // dispatch(actionCreator)

      // console.log(e.target.value)
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick: () => {
      const action = {
        type: 'add_item',
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)