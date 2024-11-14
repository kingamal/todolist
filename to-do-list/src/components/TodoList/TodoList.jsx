import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);
  return (
    <ul className="todo-list">
      {sortedTasks.map(task => (
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
