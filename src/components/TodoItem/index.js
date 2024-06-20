import './index.css'

const TodoItem = props => {
  const {ItemDetails, deleteItem} = props
  const {id, title} = ItemDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-container">
      <p>{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
