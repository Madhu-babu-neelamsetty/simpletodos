import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteItem = id => {
    const {todosList} = this.state
    const filterData = todosList.filter(each => each.id !== id)
    this.setState({todosList: filterData})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="app-container">
        <div className="todo-container">
          <h1>Simple Todos</h1>
          <div className="un-container">
            <ul className="unorder-container">
              {todosList.map(eachTodo => (
                <TodoItem
                  ItemDetails={eachTodo}
                  key={eachTodo.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
