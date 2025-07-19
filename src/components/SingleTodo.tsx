// src/components/SingleTodo.tsx
import React, { useState, useRef, useEffect } from "react";
import  type{Todo} from "./model";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "./store/todoSlice";
import type { AppDispatch } from "./store/store";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import './styles.css';

interface Props {
  todo: Todo;
}

const SingleTodo: React.FC<Props> = ({ todo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit) inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      setEdit(false);
    }
  };

  return (
    <form className="todos_single" onSubmit={handleEdit}>
      {edit ? (
        <input
          ref={inputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="todos_single-input"
        />
      ) : (
        <span
          className={`todos_single-text ${todo.isDone ? "strike" : ""}`}
        >
          {todo.todo}
        </span>
      )}

      <div>
        <span className="icon" onClick={() => !edit && !todo.isDone && setEdit(true)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => dispatch(deleteTodo(todo.id))}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => dispatch(toggleTodo(todo.id))}>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
