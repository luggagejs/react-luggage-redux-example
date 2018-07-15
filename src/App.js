import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchCollection, addRecord } from '@luggage/react-luggage-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  todos: state.luggage.collections.todos
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCollection,
  addRecord
}, dispatch)

export class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    fetchCollection: PropTypes.func.isRequired,
    addRecord: PropTypes.func.isRequired
  }

  static defaultProps = {
    todos: []
  }

  componentDidMount() {
    this.props.fetchCollection('todos')
  }

  addTodo() {
    this.props.addRecord('todos', { text: this.todoInput.value })
    this.todoInput.value = ''
  }

  render() {
    const { todos } = this.props

    return (
      <div>
        <input placeholder='New todo' ref={i => { this.todoInput = i }} />
        <button onClick={this.addTodo.bind(this)}>Add</button>
        { todos.map((todo, i) => <div key={i}>{todo.text}</div>) }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
