import React from 'react';
import './styles.css';
import type { Todo } from './model';
import SingleTodo from './SingleTodo';

interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos, }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos-heading">
          Active Tasks
        </span>
        {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
          ))
        }
      </div>
      <div className="todos-remove">
        <span className="todos-heading">
          Completed Tasks
        </span>
        {todos
        .filter((todo) => todo.isDone)
        .map((todo) => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList