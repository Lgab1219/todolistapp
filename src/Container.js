import React from 'react'
import { useState } from 'react';
import './App.css';

const Container = () => {
    
    //first prop is var name, the second is the function which
    //updates the state
    const [getText, setText] = useState('');
    const [addList, setList] = useState([]);

    //get input from input bar then place value on setText function
    const getInput = (e) => {
        setText(e.target.value);
    }

    //every button click will run setText function with itemDetails
    //then place it onto the addList array, then print on console
    const buttonClick = () => {
        const itemDetails = {
            id: Math.floor(Math.random() * 10000),
            text: getText,
        }

        setText(itemDetails);
        setList([...addList, getText]);
        console.log(addList);
    }
    
    //deletes all items inside the addList array then prints out
    //in console.
    function removeAll() {
        for (let i of addList) {
            setList(addList.splice(0, i));
        }
        console.log(addList);
    }
    
    return (
        <div className='container'>
            <h1>Todo List</h1>
            <input type={'text'} className='inputBar' 
            onChange={getInput}
            placeholder='Add your todo here!'></input>
            <button className='btn' onClick={buttonClick}>Add</button>
            <button className='remove-btn' onClick={removeAll}>Reset All</button>
            <br />
            {
                //map function 
                //loops then prints out all objects in array
                //map function needs a key to identify if something
                //is added to the list, which in this case the id
                //of the itemDetails object
                addList.map((todos) => (
                    <li key={todos.id} className='list-tiles'>
                        {todos}
                    </li>
                ))
            }
        </div>
    )
}

export default Container
