import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const {deleteItem, index} = this.props;
    deleteItem(index)
  }
  // shouldComponentUpdate() {
  //   return false
  // }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  // 第一次存在于父组件不会执行，已经存在才会执行
  componentWillReceiveProps() {
    console.log('child component will receive props');
  }
  render() {
    // 当父组件redner函数被运行时，它的子组件的render都将被重新运行一次
    const {content} = this.props
    // jsx -> js object -> DOM
    // return (
    //   <div onClick={this.handleClick}>
    //     {content}
    //   </div>
    // )
    return React.createElement('div', {}, React.createElement('span', {'onClick': this.handleClick}, content))
  }

}

TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
}

export default TodoItem


