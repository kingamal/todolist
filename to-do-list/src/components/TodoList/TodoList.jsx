import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          toggleTaskCompletion={toggleTaskCompletion} 
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
