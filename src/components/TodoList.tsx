import React from 'react';
import './styles.css';
import { useSelector} from 'react-redux';
import type{ RootState } from './store/store';
import SingleTodo from './SingleTodo';

/* interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
} */

const TodoList: React.FC = ({}) => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const activeTodos = todos.filter((todo) => !todo.isDone );
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <div className="container">
      <div className="todos">
        <span className="todos-heading">
          Active Tasks
        </span>
        {activeTodos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="todos-remove">
        <span className="todos-heading">
          Completed Tasks
        </span>
        {completedTodos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default TodoList