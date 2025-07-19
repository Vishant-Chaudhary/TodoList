import React from 'react';
import './styles.css';
import { useDispatch, useSelector} from 'react-redux';
import type { AppDispatch, RootState } from './store/store';
import SingleTodo from './SingleTodo';
import { DragDropContext, Droppable, type DropResult } from '@hello-pangea/dnd';
import { toggleTodo } from './store/todoSlice';



const TodoList: React.FC = ({}) => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();


  const activeTodos = todos.filter((todo) => !todo.isDone );
  const completedTodos = todos.filter((todo) => todo.isDone);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      const movedTodo =
        source.droppableId === 'ActiveTodos'
        ? activeTodos[source.index]
        :completedTodos[source.index];
      
      dispatch(toggleTodo(movedTodo.id));
    }
  };


  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="container">
      <Droppable droppableId="ActiveTodos">
        {(provided) => (
      <div 
      className="todos"
      ref={provided.innerRef}
      {...provided.droppableProps}
      >
        <span className="todos-heading">
          Active Tasks
        </span>
        {activeTodos.map((todo, index) => (
          <SingleTodo key={todo.id} todo={todo} index={index} />
        ))}
        {provided.placeholder}
      </div>
      )}
      </Droppable>

      <Droppable droppableId="completedTodos">
        {(provided) => (
      <div 
      className="todos-remove"
      ref={provided.innerRef}
      {...provided.droppableProps}
      >
        <span className="todos-heading">
          Completed Tasks
        </span>
        {completedTodos.map((todo, index) => (
          <SingleTodo key={todo.id} todo={todo} index={index} />
        ))}
        {provided.placeholder}
      </div>
      )}
      </Droppable>
    </div>
    </DragDropContext>
  );
};

export default TodoList