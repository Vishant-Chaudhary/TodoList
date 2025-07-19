import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import type { AppDispatch } from './store/store';
import './styles.css';

/* interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
} */

const InputFeild: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const Dispatch = useDispatch<AppDispatch>();

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim()) {
      Dispatch(addTodo(todo));
      setTodo("");
    }
  };


    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form action="" className='input'  onSubmit={(e)=>{
         handleAdd(e);
         inputRef.current?.blur();
    }}>
        <input ref={inputRef} type="input" value={todo} onChange={ (e) =>setTodo(e.target.value)} placeholder='Enter a task'  className='input_box' />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild