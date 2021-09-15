import React,{useState, useEffect, useCallback} from 'react';
import styled from '@emotion/styled';
import * as api from '../api/todo';
import { Todo } from '../types/Todo';
import TodoItem from './Todo';

export default function TodoList(){
    // function useLocalStorage(key, initialState){
    //     const[todos, setTodos]=useState(localStorage.getItem(key) ?? initialState);
    //     const updatedTodos= useCallback(
    //         newValue =>{
    //             if(newValue===initialState || typeof newValue === 'undefined'){
    //                 localStorage.removeItem(key);
    //             }
    //             else{
    //                 localStorage.setItem(key, newValue);
    //             }
    //             setTodos(newValue ?? initialState);
    //         },
    //         [initialState,key]
    //     );
    //     return [todos, updatedTodos];
    // }
    const todos = api.getTodos();
    // useEffect(() =>{
    //     window.addEventListener('storage',() => {
    //         setTodos(api.getTodos);
    //     });
    // });
    return(
        <>
        {todos.map((todo) => 
            <TodoItem key = {todo.id} id={todo.id} content={todo.content} completed={todo.completed} createDatetime={todo.createDatetime}/>
        )}
        </>
    );
}
